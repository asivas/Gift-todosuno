import Pools from "../models/Pools";
import Users from "../models/Users";
import Cuadros from "../models/Cuadros";
import jwt from "jsonwebtoken";

require("dotenv").config();

export const cuadroId = async (req, res) => {
  try {
    const { cuadroId } = req.params;

    const cuadro = await Cuadros.findById(cuadroId);

    res.json(cuadro);
  } catch (error) {
    console.log(error);
  }
};


export const cuadroHijo = async (req, res) => {
  try {
    const { cuadroId } = req.params;

    const cuadro = await Cuadros.findOne({legend:cuadroId});

    res.status(200).json(cuadro);
  } catch (error) {
    console.error(error);
    // Manejar el error según tus necesidades
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; 



export const deleteCuadro = async (req, res) => {
  try {
    const {dataCuadro} = req.body;
   
    if (!dataCuadro) {
      // Si el cuadro no se encuentra, responde con un mensaje de error
      return res.status(404).json({ message: 'Cuadro no encontrado' });
    }

    const cuadro = await Cuadros.findByIdAndDelete(dataCuadro._id);

    res.status(200).json("borrado satisfactoriament");
  } catch (error) {
    console.log(error);
  }
};

export const createCuadros = async (req, res) => {
  try {
    const { dataCuadro, prop1, prop2  } = req.body;

    
    if (prop1 === "derecho" ) {
   
      if ( prop2 === "builders1") {
        let cuadroDerecho = {
          guide: dataCuadro.lado_derecho.builders1.username,
        };
        let cuadro = new Cuadros({
          poolId: dataCuadro.poolId,
          legend: dataCuadro.lado_derecho.guide,
          lado_derecho: cuadroDerecho,
          lado_izquierdo:{guide:""},
          cuadroPadre_id: dataCuadro._id
        });
      
      const pool = await Pools.findById(dataCuadro.poolId);
      pool.cuadros.push(cuadro);
      await pool.save();
      await cuadro.save();
      const guide = await Users.findOne({ username:dataCuadro.lado_derecho.guide });
      const builder = await Users.findOne({ username:dataCuadro.lado_derecho.builders1.username });
      guide.cuadro_id = cuadro._id
      builder.cuadro_id = cuadro._id
      await guide.save();
      await builder.save();
      return res.status(200).json({msg:"nuevo cuadro"});
      }
      if (prop2 === "builders2") {
        let cuadroDerecho = {
          guide: dataCuadro.lado_derecho.builders2.username,
        };
        let cuadro = new Cuadros({
          poolId: dataCuadro.poolId,
          legend: dataCuadro.lado_derecho.guide,
          lado_derecho: cuadroDerecho,
          lado_izquierdo:{guide:""},
          cuadroPadre_id: dataCuadro._id
        });
        const pool = await Pools.findById(dataCuadro.poolId);
      pool.cuadros.push(cuadro);
      await pool.save();
      await cuadro.save();
      const guide = await Users.findOne({ username:dataCuadro.lado_derecho.guide });
      const builder = await Users.findOne({ username:dataCuadro.lado_derecho.builders2.username });
      guide.cuadro_id = cuadro._id
      builder.cuadro_id = cuadro._id
      await guide.save();
      await builder.save();
      return res.status(200).json({msg:"nuevo cuadro"})
      }

    }

    if (prop1 === "izquierdo") {
   
      if ( prop2 === "builders1") {
        let cuadroIzquierdo = {
          guide: dataCuadro.lado_izquierdo.builders1.username,
        };
        let cuadro = new Cuadros({
          poolId: dataCuadro.poolId,
          legend: dataCuadro.lado_izquierdo.guide,
          lado_izquierdo:{guide:""},
          lado_derecho:cuadroIzquierdo,
          cuadroPadre_id: dataCuadro._id
        });
        const pool = await Pools.findById(dataCuadro.poolId);
        pool.cuadros.push(cuadro);
        await pool.save();
        await cuadro.save();
        const guide = await Users.findOne({ username:dataCuadro.lado_izquierdo.guide });
        const builder = await Users.findOne({ username:dataCuadro.lado_izquierdo.builders1.username });
        guide.cuadro_id = cuadro._id
        builder.cuadro_id = cuadro._id
        await guide.save();
        await builder.save();
        return res.status(200).json({msg:"nuevo cuadro"})
      }

      if (prop2 === "builders2") {
        let cuadroIzquierdo = {
          guide: dataCuadro.lado_izquierdo.builders2.username,
        };
        let cuadro = new Cuadros({
          poolId: dataCuadro.poolId,
          legend: dataCuadro.lado_izquierdo.guide,
          lado_izquierdo: cuadroIzquierdo,
          lado_derecho:{guide:""},
          cuadroPadre_id: dataCuadro._id
        });
      
        const pool = await Pools.findById(dataCuadro.poolId);
      pool.cuadros.push(cuadro);
      await pool.save();
      await cuadro.save();
      const guide = await Users.findOne({ username:dataCuadro.lado_izquierdo.guide });
      const builder = await Users.findOne({ username:dataCuadro.lado_izquierdo.builders2.username });
      guide.cuadro_id = cuadro._id
      builder.cuadro_id = cuadro._id
      await guide.save();
      await builder.save();
      return res.status(200).json({msg:"nuevo cuadro"})
      }}
  
   /* if(dataCuadro && prop1 && prop2) {
      res.status(202).json("todo ok")
    } */
    // Resto del código si es necesario
  } catch (error) {
    console.error(error);
    // Manejar el error según tus necesidades
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
    

export const traerCuadroPadre = async (req,res) => {
  const { padre, hijo, nieto } = req.body;

  try {
    const cuadro = await Cuadros.findOne({ legend: padre });
  
    if (cuadro) {
      // Buscar en el lado derecho
      if (cuadro.lado_derecho && cuadro.lado_derecho.guide === hijo) {
        console.log(`El hijo ${hijo} está en el lado derecho del cuadro.`);
        cuadro.lado_derecho.builders2.username = nieto;
        cuadro.save();
      }
  
      // Buscar en el lado izquierdo si no se encontró en el lado derecho
      else if (cuadro.lado_izquierdo && cuadro.lado_izquierdo.guide === hijo) {
        console.log(`El hijo ${hijo} está en el lado izquierdo del cuadro.`);
        cuadro.lado_izquierdo.builders2.username = nieto;
        cuadro.save();

      } else {
        console.log(`El hijo ${hijo} no fue encontrado en los lados del cuadro.`);
      }
    } else {
      console.log(`Cuadro con legend ${padre} no encontrado.`);
    }
  } catch (error) {
    console.error('Error al buscar el cuadro:', error);
  }
}
  
/*
export const acceptPay = async (req, res) => {
  try {
    const { userActive } = req.body;
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
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const cuadro = await Cuadros.findById(user.cuadro_id);

    if (cuadro.legend === user.username && !cuadro.isFinalized) {
      if (cuadro.lado_derecho.builders1.username === userActive) {
        cuadro.lado_derecho.builders1.active = true;
      } else if (cuadro.lado_derecho.builders2.username === userActive) {
        cuadro.lado_derecho.builders2.active = true;
      } else if (cuadro.lado_izquierdo.builders1.username === userActive) {
        cuadro.lado_izquierdo.builders1.active = true;
      } else if (cuadro.lado_izquierdo.builders2.username === userActive) {
        cuadro.lado_izquierdo.builders2.active = true;
      }
      await cuadro.save();
    } else {
      return res.status(404).json({ message: "No podes mas" });
    }
    if (
      cuadro.lado_derecho.builders1.active &&
      cuadro.lado_derecho.builders2.active &&
      !cuadro.lado_derecho.isFinished
    ) {
      const cuadroID = await createCuadro(
        cuadro.poolId,
        cuadro.lado_derecho.guide,
        cuadro.lado_derecho.builders1.username,
        cuadro.lado_derecho.builders2.username
      );
      await updateUserCuadroID(cuadro.lado_derecho.guide, cuadroID);
      await updateUserCuadroID(
        cuadro.lado_derecho.builders1.username,
        cuadroID
      );
      await updateUserCuadroID(
        cuadro.lado_derecho.builders2.username,
        cuadroID
      );

      cuadro.lado_derecho.isFinished = true;

      await cuadro.save();
    } else if (
      cuadro.lado_izquierdo.builders1.active &&
      cuadro.lado_izquierdo.builders2.active &&
      !cuadro.lado_izquierdo.isFinished
    ) {
      const cuadroID = await createCuadro(
        cuadro.poolId,
        cuadro.lado_izquierdo.guide,
        cuadro.lado_izquierdo.builders1.username,
        cuadro.lado_izquierdo.builders2.username
      );

      await Promise.all([
        updateUserCuadroID(cuadro.lado_izquierdo.guide, cuadroID),
        updateUserCuadroID(cuadro.lado_izquierdo.builders1.username, cuadroID),
        updateUserCuadroID(cuadro.lado_izquierdo.builders2.username, cuadroID),
      ]);

      cuadro.lado_izquierdo.isFinished = true;

      await cuadro.save();
    }
    if (
      cuadro.lado_izquierdo.builders1.active &&
      cuadro.lado_izquierdo.builders2.active &&
      cuadro.lado_derecho.builders1.active &&
      cuadro.lado_derecho.builders2.active
    ) {
      cuadro.isFinalized = true;

      const pool = await Pools.findById(cuadro.poolId);

      user.cuadro_id = null;

      if (pool.nivel === "1") {
        user.nivel1 = true;
      } else if (pool.nivel === "2") {
        user.nivel2 = true;
      } else if (pool.nivel === "3") {
        user.nivel3 = true;
      } else if (pool.nivel === "4") {
        user.nivel4 = true;
      } else if (pool.nivel === "5") {
        user.nivel5 = true;
      } else if (pool.nivel === "6") {
        user.nivel6 = true;
      } else if (pool.nivel === "7") {
        user.nivel7 = true;
      } else if (pool.nivel === "8") {
        user.nivel8 = true;
      } else if (pool.nivel === "9") {
        user.nivel9 = true;
      } else if (pool.nivel === "10") {
        user.nivel10 = true;
      }

      await user.save();
      await cuadro.save();
    }
    res.status(200).json({ message: "succesield" });
  } catch (error) {
    console.log(error);
  }
};

const updateUserCuadroID = async (username, cuadroID) => {
  const user = await Users.findOne({ username: username });
  if (user) {
    user.cuadro_id = cuadroID;
    await user.save();
  }
};  

export const findAndAssignPosition = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token.split(" ")[1], process.env.PASS_TOKEN, {
    algorithm: "HS256",
  });

  const email = decodedToken.email;

  const user = await Users.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }

  let userFather = await Users.findOne({ username: user.referral_father });

  while (userFather) {
    if (userFather.cuadro_id !== null) {
      const cuadro = await Cuadros.findById(userFather.cuadro_id);

      if (cuadro.lado_derecho.guide === userFather.username) {
        const referral = cuadro.lado_derecho;

        if (referral.builders1.username === null) {
          cuadro.lado_derecho.builders1.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = cuadro.poolId;
          await user.save();
          break;
        } else if (referral.builders2.username === null) {
          cuadro.lado_derecho.builders2.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = cuadro.poolId;
          await user.save();
          break;
        }
      }

      if (cuadro.lado_izquierdo.guide === userFather.username) {
        const referral = cuadro.lado_izquierdo;

        if (referral.builders1.username === null) {
          cuadro.lado_izquierdo.builders1.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = cuadro.poolId;
          await user.save();
          break;
        } else if (referral.builders2.username === null) {
          cuadro.lado_izquierdo.builders2.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = cuadro.poolId;
          await user.save();
          break;
        }
      }
    } else {
      userFather = await Users.findOne({
        username: userFather.referral_father,
      });
    }
  }

  if (!userFather) {
    const pools = await Pools.find({});

    for (const pool of pools) {
      for (const cuadroId of pool.cuadros) {
        const cuadro = await Cuadros.findById(cuadroId);

        if (cuadro.lado_derecho.builders1.username === null) {
          cuadro.lado_derecho.builders1.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = pool._id;
          await user.save();
          return;
        } else if (cuadro.lado_derecho.builders2.username === null) {
          cuadro.lado_derecho.builders2.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = pool._id;
          await user.save();
          return;
        }

        if (cuadro.lado_izquierdo.builders1.username === null) {
          cuadro.lado_izquierdo.builders1.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = pool._id;
          await user.save();
          return;
        } else if (cuadro.lado_izquierdo.builders2.username === null) {
          cuadro.lado_izquierdo.builders2.username = user.username;
          user.cuadro_id = cuadro._id;
          user.poolId = pool._id;
          await user.save();
          return;
        }
      }
    }
    console.log("No se encontró un cuadro válido para asignar posición.");
  }
};

// export const createCuadro2 = async (req, res) => {
//   try {
//     const { poolId, legend, guide1, guide2 } = req.body;
//     const cuadroDerecho = {
//       guide: guide1,
//     };
//     const cuadroIzquierdo = {
//       guide: guide2,
//     };

//     const cuadro = new Cuadros({
//       poolId: poolId,
//       legend: legend,
//       lado_derecho: cuadroDerecho,
//       lado_izquierdo: cuadroIzquierdo,
//     });

//     const pool = await Pools.findById(poolId);

//     pool.cuadros.push(cuadro);

//     pool.save();
//     cuadro.save();

//     res.status(200).json({ message: "succesield" });
//   } catch (error) {
//     console.log(error);
//   }
// };
  */





/*  
  
*/