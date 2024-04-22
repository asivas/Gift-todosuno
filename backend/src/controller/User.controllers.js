import Users from "../models/Users";
import Pools from "../models/Pools";
import jwt from "jsonwebtoken";
import Cuadros from "../models/Cuadros";
import Admin from "../models/Admin";

const bcrypt = require("bcrypt");

require("dotenv").config({ path: ".env.prod" });

let userP;
export const userData = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(
      token.split(" ")[1],
      process.env.PASS_TOKEN,
      {
        algorithm: "HS256",
      },
    );
    const email = decodedToken.email;

    const user = await Users.findOne({ email: email });

    userP = user;

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const cambiarEstado = async (req, res) => {
  try {
    const { user } = req.body;
    const usuario = await Users.findOne({ username: user });
    usuario.complete = false;
    usuario.save();
    res.status(200).json({ msg: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//funcion mejorada
export const cambiarEstadoPadre = async (username) => {
  try {
    const user = await Users.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }

    const nivel = user.nivel;

    const pool = await Pools.findOne({ nivel });

    if (!pool) {
      throw new Error(`Pool for level ${nivel} not found`);
    }

    const cuadroEncontrado = pool.cuadros.find(
      (cuadro) => cuadro.legend === username,
    );

    if (cuadroEncontrado) {
      user.complete = true;
      await user.save();
    }

    return;
  } catch (error) {
    console.error("Error in cambiarEstadoPadre:", error.message);
    throw error;
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    //console.log(users)
    res.json(users);
  } catch (error) {
    console.error("Error al obtener todos los usuarios:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const username = req.body.username;

    if (!username) {
      res.status(405).json({ msg: "error" });
    }

    const user = await Users.findOne({ username: username.username });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    if (user.nivel === 10) {
      const father = await Users.findOne({
        username: username.referral_father,
      });
      console.log("padre", father.username);

      if (father) {
        father.referidos.pop();
        await father.save();
        console.log("Referido eliminado:", father.referidos);
      } else {
        console.log("El usuario no tiene referidos");
      }

      const cuadroFather = await Cuadros.findOne({ legend: father.username });

      if (!cuadroFather) {
        console.log("Cuadro padre no encontrado");
      } else {
        if (
          cuadroFather.lado_derecho &&
          cuadroFather.lado_derecho.guide === username.username
        ) {
          cuadroFather.lado_derecho.guide = "";
        }

        if (
          cuadroFather.lado_izquierdo &&
          cuadroFather.lado_izquierdo.guide === username.username
        ) {
          cuadroFather.lado_izquierdo.guide = "";
        }

        await cuadroFather.save();
      }

      const cuadroAbuelo = await Cuadros.findOne({
        legend: father.referral_father,
      });
      console.log("abuelo", cuadroAbuelo.legend);

      if (!cuadroAbuelo) {
        console.log("Cuadro abuelo no encontrado");
      } else {
        if (cuadroAbuelo.lado_derecho.builders1.username == username.username) {
          await Cuadros.updateOne(
            { legend: father.referral_father },
            { $unset: { "lado_derecho.builders1": 1 } },
          );
        }

        if (cuadroAbuelo.lado_derecho.builders2.username == username.username) {
          await Cuadros.updateOne(
            { legend: father.referral_father },
            { $unset: { "lado_derecho.builders2": 1 } },
          );
        }

        if (
          cuadroAbuelo.lado_izquierdo.builders1.username == username.username
        ) {
          await Cuadros.updateOne(
            { legend: father.referral_father },
            { $unset: { "lado_izquierdo.builders1": 1 } },
          );
        }

        if (
          cuadroAbuelo.lado_izquierdo.builders2.username == username.username
        ) {
          await Cuadros.updateOne(
            { legend: father.referral_father },
            { $unset: { "lado_izquierdo.builders2": 1 } },
          );
        }
      }

      const deleteUser = await Users.findOneAndDelete({
        username: username.username,
      });
      return res.status(205).json(user);
    }

    const resultado = await Cuadros.find({ legend: user.username })
      .sort({ _id: -1 })
      .limit(1)
      .exec();

    if (resultado) {
      user.cuadro_id = resultado[0]._id;

      user.nivel = user.nivel + 1;

      user.active = true;

      await user.save();

      console.log("user cambiado", user);

      const cuadroo = await Cuadros.findById(userP.cuadro_id);

      console.log("userP ", cuadroo);

      if (cuadroo.lado_derecho.builders1.username == user.username) {
        await Cuadros.updateOne(
          { _id: cuadroo._id },
          { $unset: { "lado_derecho.builders1": 1 } },
        );
        await cuadroo.save();
        res.status(205).json({ msg: "todo ok" });
      }

      if (cuadroo.lado_derecho.builders2.username == user.username) {
        await Cuadros.updateOne(
          { _id: cuadroo._id },
          { $unset: { "lado_derecho.builders2": 1 } },
        );
        await cuadroo.save();
        res.status(205).json({ msg: "todo ok" });
      }

      if (cuadroo.lado_izquierdo.builders1.username == user.username) {
        await Cuadros.updateOne(
          { _id: cuadroo._id },
          { $unset: { "lado_izquierdo.builders1": 1 } },
        );
        await cuadroo.save();
        res.status(205).json({ msg: "todo ok" });
      }

      if (cuadroo.lado_izquierdo.builders2.username == user.username) {
        await Cuadros.updateOne(
          { _id: cuadroo._id },
          { $unset: { "lado_izquierdo.builders2": 1 } },
        );
        await cuadroo.save();
        res.status(205).json({ msg: "todo ok" });
      }
    } else {
      console.log('No se encontraron documentos con "legend" igual a .');
      res.status(405).json({ msg: "error" });
    }
  } catch (error) {
    console.log("soy error", error);
    res.status(400).json(error);
  }
};

export const activarUsuario = async (req, res) => {
  try {
    const username = req.body.username;
    const user = await Users.findOne({ username });

    if (!user) {
      return res
        .status(400)
        .json({ message: `User ${username} does not exist` });
    }
    // Activar al usuario actual
    user.active = true;

    await user.save();
    return res.status(200).json({ message: "User activated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const desactivarUsuario = async (req, res) => {
  try {
    const username = req.body.username;
    const user = await Users.findOne({ username });

    if (!user) {
      return res
        .status(400)
        .json({ message: `User ${username} does not exist` });
    }
    // Activar al usuario actual
    user.active = false;

    await user.save();

    return res.status(200).json({ message: "User desactivated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export const subirNivel = async (req, res) => {
  const { username } = req.body;

  try {
    const usuario = await Users.findOne({ username });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    usuario.nivel--;

    await usuario.save();

    let referralFather = usuario.referral_father;
    let cuadroCorrecto = false;

    console.log("Comenzando bucle while");
    // Iterar mientras haya referralFather y no se haya encontrado un cuadro disponible
    while (!cuadroCorrecto) {
      console.log("Iteración del bucle while");
      console.log("Referral father:", referralFather);

      const poolCorrespondiente = await Pools.findOne({ nivel: usuario.nivel });

      if (!poolCorrespondiente) {
        return res
          .status(408)
          .json({ error: "Pool correspondiente no encontrado" });
      }

      if (
        !poolCorrespondiente.cuadros ||
        !Array.isArray(poolCorrespondiente.cuadros)
      ) {
        return res.status(407).json({
          error:
            "La propiedad 'cuadros' es inválida en el pool correspondiente",
        });
      }

      let cuadroEncontrado = poolCorrespondiente.cuadros.find(
        (cuadro) => cuadro.legend === referralFather,
      );

      console.log("Cuadro encontrado:", cuadroEncontrado);

      if (cuadroEncontrado) {
        const cuadroId = cuadroEncontrado._id;
        const cuadroSiguiente = await Cuadros.findById(cuadroId);

        if (cuadroSiguiente) {
          if (
            usuario.direction === "derecha" &&
            cuadroSiguiente.lado_derecho &&
            !cuadroSiguiente.lado_derecho.guide
          ) {
            cuadroSiguiente.lado_derecho.guide = usuario.username;
            cuadroCorrecto = true;
          } else if (
            usuario.direction === "izquierda" &&
            cuadroSiguiente.lado_izquierdo &&
            !cuadroSiguiente.lado_izquierdo.guide
          ) {
            cuadroSiguiente.lado_izquierdo.guide = usuario.username;
            cuadroCorrecto = true;
          } else {
            // Si no hay lugar disponible en el lado correcto según la dirección del usuario
            //const direccionContraria =
            //usuario.direction === "derecha" ? "izquierda" : "derecha";
            //const guideContrario =
            //usuario.direction === "derecha"
            //? cuadroSiguiente.lado_izquierdo.guide
            //: cuadroSiguiente.lado_derecho.guide;

            //if (!guideContrario) {
            // Si no hay guide en el lado contrario, ingresar al cuadro
            //referralFather = cuadroSiguiente.legend;
            //continue;
            //}
            if (usuario.direction === "derecha") {
              referralFather = await buscarUsuarioPorUsername(
                cuadroSiguiente.lado_derecho.guide,
              ).username;
              console.log(
                "Entra a la función recursiva para buscar otro referralFather:",
                referralFather,
              );
            } else {
              referralFather = await buscarUsuarioPorUsername(
                cuadroSiguiente.lado_izquierdo.guide,
              ).username;
              console.log(
                "Entra a la función recursiva para buscar otro referralFather:",
                referralFather,
              );
            }
          }

          usuario.cuadro_id = cuadroSiguiente._id;
          await usuario.save();
          await cuadroSiguiente.save();

          return res
            .status(200)
            .json({ message: "Usuario asignado a un cuadro correctamente" });
        }
      }

      // Si no se encontró un cuadro adecuado, buscar el siguiente referralFather
      referralFather = await buscarReferralFather(referralFather);
    }

    // Si llegamos aquí, significa que no se encontró una posición disponible
    return res
      .status(409)
      .json({ message: "No se encontró una posición disponible" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Hubo un error en el servidor" });
  }
};

// Función para buscar el referral_father de un usuario
const buscarReferralFather = async (referralFather) => {
  try {
    const user = await Users.findOne({ username: referralFather });
    return user ? user.referral_father : null;
  } catch (error) {
    console.error("Error al buscar referral_father:", error);
    return null;
  }
};

const buscarUsuarioPorUsername = async (username) => {
  try {
    const user = await Users.findOne({ username });
    return user;
  } catch (error) {
    console.error("Error al buscar usuario por username:", error);
    return null;
  }
};
export const buscarAbueloRecursivo = async (pool, referralFather, hijo) => {
  try {
    // Buscar al usuario abuelo en la base de datos
    const usuario = await Users.findOne({ username: referralFather }).lean();

    // Verificar si se encontró al usuario abuelo
    if (!usuario || !usuario.referral_father) {
      console.log("No se encontró al usuario abuelo usercontroller");
      return false;
    }

    // Obtener al anteúltimo usuario
    const anteultimo = await Users.findOne({ username: referralFather });

    // Obtener al usuario hijo
    const userHijo = await Users.findOne({ username: hijo });

    // Buscar el cuadro del abuelo por su leyenda
    const cuadroEncontrado = pool.cuadros.find(
      (cuadro) => cuadro.legend === usuario.referral_father,
    );

    // Verificar si se encontró el cuadro del abuelo
    if (cuadroEncontrado) {
      console.log("Cuadro encontrado con leyenda:", cuadroEncontrado);

      // Obtener el cuadro siguiente
      const cuadroSiguiente = await Cuadros.findById(cuadroEncontrado._id);

      // Verificar la dirección del anteúltimo usuario y actualizar el cuadro siguiente según corresponda
      if (anteultimo.direction === "derecha") {
        if (
          cuadroSiguiente &&
          cuadroSiguiente.lado_derecho &&
          !cuadroSiguiente.lado_derecho.guide
        ) {
          cuadroSiguiente.lado_derecho.guide = userHijo.username;
          userHijo.cuadro_id = cuadroSiguiente._id;
          await userHijo.save();
          return cuadroSiguiente.save();
        }
      } else if (anteultimo.direction === "izquierda") {
        if (
          cuadroSiguiente &&
          cuadroSiguiente.lado_izquierdo &&
          !cuadroSiguiente.lado_izquierdo.guide
        ) {
          cuadroSiguiente.lado_izquierdo.guide = userHijo.username;
          userHijo.cuadro_id = cuadroSiguiente._id;
          await userHijo.save();
          return cuadroSiguiente.save();
        }
      }
    }

    // Llamada recursiva para buscar al abuelo en el siguiente nivel de la cadena
    return buscarAbueloRecursivo(
      pool,
      usuario.referral_father,
      userHijo.username,
    );
  } catch (error) {
    console.error("Error al buscar al abuelo! hasta aca llega:", error);
    return null;
  }
};

// Funcion modificada para su mejor funcionamiento

export const remindFatherFn = async (req, res) => {
  try {
    // Obtener el nombre de usuario del padre referente desde la solicitud
    const referralFatherUsername = req.body.referral_father;

    // Buscar al usuario padre referente en la base de datos
    const referralFather = await Users.findOne({
      username: referralFatherUsername,
    });

    // Verificar si el usuario padre referente existe
    if (!referralFather) {
      return res
        .status(404)
        .json({ message: "El usuario padre referente no existe" });
    }

    // Si el usuario padre referente existe, devolverlo como respuesta
    return res.status(200).json(referralFather);
  } catch (error) {
    console.error("Error al buscar el padre referente:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const userUpdate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      user.password = hash;
    }

    const updatedUser = await user.save();

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al actualizar datos", error: error.message });
  }
};
