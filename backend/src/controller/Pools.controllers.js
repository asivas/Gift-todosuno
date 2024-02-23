import Pools from "../models/Pools";
import Cuadros from "../models/Cuadros"
import Users from "../models/Users";

export const createPool = async (req, res) => {
  try {
    const { nivel, minimum } = req.body;
    const newPool = new Pools({
      nivel: nivel,
      minimum: minimum,
    });

    await newPool.save();

    res
      .status(201)
      .json({ message: "Pool created successfully", data: newPool });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the pool",
      error: error.message,
    });
  }
};

export const getAllPools = async (req, res) => {
  try {
    const pools = await Pools.find();
    res.status(200).json(pools);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the pools",
      error: error.message,
    });
  }
};


export const agregarApool = async (req, res) => {
  try {
    const { username } = req.body;
    
    // Encuentra el usuario referido por el padre
    const referalF = username.referral_father;
    const userF = await Users.findOne({ username: referalF });
    if (!userF) {
      return res.status(404).json({ message: "Usuario referido no encontrado" });
    }
    
    // Encuentra el nivel del usuario referido
    const nivel = userF.nivel;

    // Encuentra el cuadro correspondiente en la pool
    const pool = await Pools.findOne({ nivel });
    if (!pool) {
      return res.status(404).json({ message: "Pool no encontrada para el nivel del usuario" });
    }

    // Encuentra el cuadro del usuario referido
    const cuadroEncontrado = pool.cuadros.find(cuadro => cuadro.legend === referalF);
    if (!cuadroEncontrado) {
      return res.status(404).json({ message: "Cuadro del usuario referido no encontrado en la pool" });
    }

    // Verifica si el lado derecho del cuadro está vacío y actualízalo si es así
    if (!cuadroEncontrado.lado_derecho.guide) {
      cuadroEncontrado.lado_derecho.guide = username.username;
      await Pools.findOneAndUpdate(
        { nivel, "cuadros.legend": referalF },
        { $set: { "cuadros.$.lado_derecho.guide": username.username } }
      );
      return res.status(200).json({ message: "Usuario agregado al lado derecho del cuadro" });
    }
    
    // Verifica si el lado izquierdo del cuadro está vacío y actualízalo si es así
    if (!cuadroEncontrado.lado_izquierdo.guide) {
      cuadroEncontrado.lado_izquierdo.guide = username.username;
      await Pools.findOneAndUpdate(
        { nivel, "cuadros.legend": referalF },
        { $set: { "cuadros.$.lado_izquierdo.guide": username.username } }
      );
      return res.status(200).json({ message: "Usuario agregado al lado izquierdo del cuadro" });
    }
    
    // Si ambos lados del cuadro están ocupados, indica que el cuadro está completo
    return res.status(400).json({ message: "El cuadro del usuario referido está completo" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const getPoolById = async (req, res) => {
  try {
    const poolId = req.params.id;
    const pool = await Pools.findById(poolId);

    if (!pool) {
      return res.status(404).json({ message: "Pool not found" });
    }
    res.status(200).json({ data: pool });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the pool",
      error: error.message,
    });
  }
};
