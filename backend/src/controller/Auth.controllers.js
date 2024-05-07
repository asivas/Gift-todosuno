import bcrypt from "bcrypt";
import Users from "../models/Users";
import Cuadros from "../models/Cuadros";
import Pools from "../models/Pools";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
require("dotenv").config();

export const registerUser = async (req, res) => {
  try {
    const { email, username, name, password } = req.body;
    const { referralUser } = req.params;
    if (!email || !username || !name) {
      return res
        .status(400)
        .json({ message: "The fields email, username, and name are required" });
    }

    const existingUser = await Users.findOne({
      $or: [{ email }, { username }],
    });
    console.log("ema1", existingUser);
    if (existingUser) {
      return res.status(409).json({
        message: "A user with the same email or username already exists",
      });
    }
    let newUser;

    if (referralUser) {
      const referral = await Users.findOne({ username: referralUser });

      if (referral.referidos.length >= 2) {
        //  console.log(referral.referidos[0])
        return res.status(412).json({
          message: "No podes referir mas",
        });
      }

      const referido = referral.referidos[0];

      if (referido) {
        //  console.log(referido)
        const referral2 = await Users.findOne({ username: referido });
        if (referral2.active == false) {
          return res.status(413).json({
            message: "Todavia no activo a su primer referido",
          });
        }
      }

      //console.log("no existe referido")

      const hashedPassword = await bcrypt.hash(password, 10);

      if (referral.referidos.length === 0) {
        newUser = new Users({
          email: email,
          username: username,
          name: name,
          password: hashedPassword,
          referral_father: referralUser,
          cuadro_id: referral.cuadro_id,
          poolId: referral.poolId,
          direction: "derecha",
        });
      }

      if (referral.referidos.length === 1) {
        newUser = new Users({
          email: email,
          username: username,
          name: name,
          password: hashedPassword,
          referral_father: referralUser,
          cuadro_id: referral.cuadro_id,
          poolId: referral.poolId,
          direction: "izquierda",
        });
        const pool = await Pools.findOne({ nivel: referral.nivel });

        const indiceCuadro = pool.cuadros.findIndex(
          (cuadro) => cuadro.legend === referral.username,
        );

        if (indiceCuadro !== -1) {
          pool.cuadros[indiceCuadro].lado_izquierdo.guide = username;
          console.log(
            "agregado al pool",
            pool.cuadros[indiceCuadro].lado_izquierdo.guide,
          );
        }
        await pool.save();
      }

      // ACA ENCUENTRA EL CUADRO DE TU REFER
      const cuadro = await Cuadros.findById(referral.cuadro_id);
      //console.log(cuadro)

      if (cuadro.legend === referralUser) {
        if (referral.referidos.length === 0) {
          cuadro.lado_derecho.guide = username;
        } else if (referral.referidos.length === 1) {
          cuadro.lado_izquierdo.guide = username;
        }
      }

      if (cuadro.lado_derecho.guide === referralUser) {
        if (referral.referidos.length === 0) {
          cuadro.lado_derecho.builders1.username = username;
          // abrirle su propio cuadro -->  lado_derecho.guide;
        } else if (referral.referidos.length === 1) {
          cuadro.lado_derecho.builders2.username = username;
        }
      }

      if (cuadro.lado_izquierdo.guide === referralUser) {
        if (referral.referidos.length === 0) {
          cuadro.lado_izquierdo.builders1.username = username;
        } else if (referral.referidos.length === 1) {
          cuadro.lado_izquierdo.builders2.username = username;
        }
      }
      const dataAdmin = new Admin({
        username: username,
        nivel: referral.nivel,
      });
      await dataAdmin.save();

      referral.referidos.push(username);
      await newUser.save();
      await cuadro.save();
      await referral.save();

      if (referral.referidos.length === 2) {
        const ref = await Users.findOne({ username: referralUser });
        ref.complete = true;
        ref.save();
      }
    }

    res
      .status(200)
      .json({ message: "User successfully registered", data: newUser });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while registering the user",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const passGenerica = "TODOSUNO2024"; // Contraseña genérica
    const hashedPassGenerica = await bcrypt.hash(passGenerica, 10); // Hash de la contraseña genérica

    const { email, password } = req.body;
    console.log(
      "Email : " + email + "Pass :" + password + "GENERICA : " + passGenerica,
    );
    if (!email || !password) {
      return res.status(400).json({
        message:
          "El correo electrónico y la contraseña son campos obligatorios",
      });
    }

    const user = await Users.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Comparación con la contraseña genérica
    let isPasswordMatch = await bcrypt.compare(password, hashedPassGenerica);

    // Si la contraseña proporcionada no coincide con la genérica, comprobamos la contraseña del usuario

    if (!isPasswordMatch) {
      isPasswordMatch = await bcrypt.compare(password, user.password);
    }

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Contraseña inválida" });
    }

    const requ = {
      userId: user._id,
      email: user.email,
      cuadroId: user.cuadro_id,
    };
    // Generar el token de acceso
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        cuadroId: user.cuadro_id,
      },
      process.env.PASS_TOKEN,
      { expiresIn: "100m" },
    );
    res.status(200).json({ message: "Login Ssuccessful", token: token });
  } catch (error) {
    res.status(500).json({
      message: "Se produjo un error al procesar el inicio de sesión",
      error: error.message,
    });
  }
};

export const registerUserFree = async (req, res) => {
  try {
    const { email, username, name, password, nivel } = req.body;
    const referral = await Users.findOne({ username: nivel });

    console.log("req", req.body);
    if (!email || !username || !name || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Users.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res.status(409).json({
        message: "A user with the same email or username already exists",
      });
    }
    //const admin = await Admin.findOne({ username: username });

    //
    const dataAdmin = new Admin({
      username: username,
      nivel: referral.nivel,
    });
    await dataAdmin.save();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      email: email,
      username: username,
      password: hashedPassword,
      nivel: referral.nivel,
      referidos: [],
    });

    // Save the new user
    await newUser.save();
    // Create a new cuadro for the user

    const nuevoCuadro = new Cuadros({
      legend: username,
      lado_derecho: { guide: "" },
      lado_izquierdo: { guide: "" },
      cuadroPadre_id: referral._id,
    });

    // Save the new cuadro
    await nuevoCuadro.save();

    const pool = await Pools.findOne({ nivel: newUser.nivel });

    // let cuadro = new Cuadros({
    //poolId: pool._id,
    //legend: username,
    //lado_derecho: { guide: "" },
    //lado_izquierdo: { guide: "" },
    //cuadroPadre_id: referral._id,
    //});
    nuevoCuadro.poolId = pool._id;
    pool.cuadros.push(nuevoCuadro);
    await pool.save();

    await nuevoCuadro.save();

    console.log("cuadro", nuevoCuadro);

    newUser.cuadro_id = nuevoCuadro._id;

    await newUser.save();
    res
      .status(200)
      .json({ message: "User successfully registered", data: newUser });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while registering the user",
      error: error.message,
    });
  }
};
