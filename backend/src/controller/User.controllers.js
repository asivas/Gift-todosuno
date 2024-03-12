import Users from "../models/Users";
import Pools from "../models/Pools";
import jwt from "jsonwebtoken";
import Cuadros from "../models/Cuadros";
const bcrypt = require('bcrypt');

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
      }
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
      throw new Error(`User ${username} not found`);
    }

    const nivel = user.nivel;

    const pool = await Pools.findOne({ nivel });

    if (!pool) {
      throw new Error(`Pool for level ${nivel} not found`);
    }

    const cuadroEncontrado = pool.cuadros.find(cuadro => cuadro.legend === username);

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


export const getAllUsers = async (res) => {
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
            { $unset: { "lado_derecho.builders1": 1 } }
          );
        }

        if (cuadroAbuelo.lado_derecho.builders2.username == username.username) {
          await Cuadros.updateOne(
            { legend: father.referral_father },
            { $unset: { "lado_derecho.builders2": 1 } }
          );
        }

        if (
          cuadroAbuelo.lado_izquierdo.builders1.username == username.username
        ) {
          await Cuadros.updateOne(
            { legend: father.referral_father },
            { $unset: { "lado_izquierdo.builders1": 1 } }
          );
        }

        if (
          cuadroAbuelo.lado_izquierdo.builders2.username == username.username
        ) {
          await Cuadros.updateOne(
            { legend: father.referral_father },
            { $unset: { "lado_izquierdo.builders2": 1 } }
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
          { $unset: { "lado_derecho.builders1": 1 } }
        );
        await cuadroo.save();
        res.status(205).json({ msg: "todo ok" });
      }

      if (cuadroo.lado_derecho.builders2.username == user.username) {
        await Cuadros.updateOne(
          { _id: cuadroo._id },
          { $unset: { "lado_derecho.builders2": 1 } }
        );
        await cuadroo.save();
        res.status(205).json({ msg: "todo ok" });
      }

      if (cuadroo.lado_izquierdo.builders1.username == user.username) {
        await Cuadros.updateOne(
          { _id: cuadroo._id },
          { $unset: { "lado_izquierdo.builders1": 1 } }
        );
        await cuadroo.save();
        res.status(205).json({ msg: "todo ok" });
      }

      if (cuadroo.lado_izquierdo.builders2.username == user.username) {
        await Cuadros.updateOne(
          { _id: cuadroo._id },
          { $unset: { "lado_izquierdo.builders2": 1 } }
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
    const usuario = await Users.findOne({ username: username });

    usuario.nivel--;

    await usuario.save();

    const poolCorrespondiente = await Pools.findOne({ nivel: usuario.nivel });

    if (!poolCorrespondiente) {
      return res
        .status(408)
        .json({ error: "Pool correspondiente no encontrado" });
    }
    if (!poolCorrespondiente.cuadros || !Array.isArray(poolCorrespondiente.cuadros)) {
      return res.status(407).json({ error: "La propiedad 'cuadros' es inválida en el pool correspondiente" });
    }
    // 1)  Si tu referal father es Nelson, osea si sos escro o pablo
    /////////////////////////////////////////////////

    if (usuario.referral_father === "Pablo10") {

      console.log(usuario.referral_father, ": usuario r father");

      let numeroPablo = usuario.nivel;

      console.log("numero pablo", numeroPablo);

      const cuadroEncontrado = poolCorrespondiente.cuadros.find(
        (cuadro) => cuadro.legend == `Pablo${numeroPablo}`
      );
      console.log("cuadro encontrado", cuadroEncontrado);

      if (cuadroEncontrado) {
        const cuadroId = cuadroEncontrado._id;
        const cuadroSiguiente = await Cuadros.findOne({ _id: cuadroId });
        console.log("cuadro siguiente", cuadroSiguiente);

        if (usuario.direction === "derecha") {
          if (
            cuadroSiguiente &&
            cuadroSiguiente.lado_derecho &&
            !cuadroSiguiente.lado_derecho.guide
          ) {
            cuadroSiguiente.lado_derecho.guide = usuario.username;
            usuario.cuadro_id = cuadroSiguiente._id;
            usuario.save();
            return cuadroSiguiente.save();
          }
        }

        if (usuario.direction === "izquierda") {
          if (
            cuadroSiguiente &&
            cuadroSiguiente.lado_izquierdo &&
            !cuadroSiguiente.lado_izquierdo.guide
          ) {
            cuadroSiguiente.lado_izquierdo.guide = usuario.username;
            usuario.cuadro_id = cuadroSiguiente._id;
            usuario.save();
            return cuadroSiguiente.save();
          }
        }
      }
    }
    //////////////////
    // 2) ENCONTRAS EL CUADRO EN EL QUE TU REFERAL FATHER ES LEGEND

    const cuadroEncontrado = poolCorrespondiente.cuadros.find(
      (cuadro) => cuadro.legend === usuario.referral_father
    );

    if (cuadroEncontrado) {
      console.log("rf", usuario.referral_father);
      console.log("cuadro legend", cuadroEncontrado.legend);
      const cuadroId = cuadroEncontrado._id;
      const cuadroSiguiente = await Cuadros.findById(cuadroId);
      console.log(cuadroSiguiente);
      if (usuario.direction === "derecha") {
        if (
          cuadroSiguiente &&
          cuadroSiguiente.lado_derecho &&
          !cuadroSiguiente.lado_derecho.guide
        ) {
          cuadroSiguiente.lado_derecho.guide = usuario.username;
          usuario.cuadro_id = cuadroSiguiente._id;
          usuario.save();
          return cuadroSiguiente.save();
        }
      }

      if (usuario.direction === "izquierda") {
        if (
          cuadroSiguiente &&
          cuadroSiguiente.lado_izquierdo &&
          !cuadroSiguiente.lado_izquierdo.guide
        ) {
          cuadroSiguiente.lado_izquierdo.guide = usuario.username;
          usuario.cuadro_id = cuadroSiguiente._id;
          usuario.save();
          return cuadroSiguiente.save();
        }
      }

      cambiarEstadoPadre(usuario.referral_father);
    }

    /////////////////////////////////////////////////
    //3) Buscar el cuadro con guides igual a referral_father, lo encuentro
    const cuadroEncontrado2 = poolCorrespondiente.cuadros.find(
      (cuadro) => cuadro.lado_derecho.guide === usuario.referral_father
    );

    if (cuadroEncontrado2) {
      console.log("cuadro encontrado 2", cuadroEncontrado2);
      const cuadroId = cuadroEncontrado2._id;
      const cuadroSiguiente = await Cuadros.findById(cuadroId);
      console.log("cuadro encontrado en pool", cuadroEncontrado2);
      console.log("cuadro encontrado en cuadro", cuadroSiguiente);

      if (usuario.direction === "derecha") {
        if (
          cuadroSiguiente &&
          cuadroSiguiente.lado_derecho &&
          !cuadroSiguiente.lado_derecho.builders1.username
        ) {
          cuadroSiguiente.lado_derecho.builders1.username = usuario.username;
          usuario.cuadro_id = cuadroSiguiente._id;
          usuario.save();
          return cuadroSiguiente.save();
        }
      }

      if (usuario.direction === "izquierda") {
        if (
          cuadroSiguiente &&
          cuadroSiguiente.lado_derecho &&
          !cuadroSiguiente.lado_derecho.builders2.username
        ) {
          console.log("ema", "builder2 no existe en la derecha");
          cuadroSiguiente.lado_derecho.builders2.username = usuario.username;
          usuario.cuadro_id = cuadroSiguiente._id;
          usuario.save();
          return cuadroSiguiente.save();
        } else {
          console.log(
            "ya hay recluiter 2 en el cuadro:",
            cuadroSiguiente.lado_derecho.builders2.username
          );
        }
      }
      cambiarEstadoPadre(usuario.referral_father);
    }

    const cuadroEncontrado3 = poolCorrespondiente.cuadros.find(
      (cuadro) => cuadro.lado_izquierdo.guide === usuario.referral_father
    );
    if (cuadroEncontrado3) {
      //console.log("soy guia izq")
      const cuadroId = cuadroEncontrado3._id;
      const cuadroSiguiente = await Cuadros.findById(cuadroId);
      console.log("cuadro encontrado 3", cuadroSiguiente);

      if (cuadroSiguiente) {
        console.log("cuadro encontrado en pool", cuadroEncontrado3);
        console.log("cuadro encontrado en cuadro", cuadroSiguiente);

        if (usuario.direction === "derecha") {
          if (
            cuadroSiguiente &&
            cuadroSiguiente.lado_izquierdo &&
            !cuadroSiguiente.lado_izquierdo.builders1.username
          ) {
            cuadroSiguiente.lado_izquierdo.builders1.username =
              usuario.username;
            usuario.cuadro_id = cuadroSiguiente._id;
            usuario.save();
            return cuadroSiguiente.save();
          }
        }

        if (usuario.direction === "izquierda") {
          if (
            cuadroSiguiente &&
            cuadroSiguiente.lado_izquierdo &&
            !cuadroSiguiente.lado_izquierdo.builders2.username
          ) {
            cuadroSiguiente.lado_izquierdo.builders2.username =
              usuario.username;
            usuario.cuadro_id = cuadroSiguiente._id;
            usuario.save();
            return cuadroSiguiente.save();
          }
        }
      }
      cambiarEstadoPadre(usuario.referral_father);
    }

    ////////////////////////////////////////////

    const abueloEncontrado = await buscarAbueloRecursivo(
      poolCorrespondiente,
      usuario.referral_father,
      usuario.username
    );

    if (abueloEncontrado) {
      console.log("abuelo encontrado", abueloEncontrado);
      cambiarEstadoPadre(abueloEncontrado.legend);
    } else {
      // Si no se encuentra el cuadro ni el "abuelo", devolver un error
      return res
        .status(410)
        .json({ error: "No se encontró el cuadro ni el abuelo en el linaje." });
    }

    return res.status(205).json({ msg: "todo ok" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Hubo un error en el servidor" });
  }
};

// funcion modificada para su mejor funcionamiento //

export const buscarAbueloRecursivo = async (pool, referralFather, hijo) => {
  try {
    // Buscar al usuario abuelo en la base de datos
    const usuario = await Users.findOne({ username: referralFather }).lean();

    // Verificar si se encontró al usuario abuelo
    if (!usuario || !usuario.referral_father) {
      console.log("No se encontró al usuario abuelo");
      return null;
    }

    // Obtener al anteúltimo usuario
    const anteultimo = await Users.findOne({ username: referralFather });

    // Obtener al usuario hijo
    const userHijo = await Users.findOne({ username: hijo });

    // Buscar el cuadro del abuelo por su leyenda
    const cuadroEncontrado = pool.cuadros.find(
      (cuadro) => cuadro.legend === usuario.referral_father
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
      userHijo.username
    );
  } catch (error) {
    console.error("Error al buscar al abuelo:", error);
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
     console.log("Emaaaaaa", user)
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
    return res.status(500).json({ message: "Error al actualizar datos", error: error.message });
  }
};
