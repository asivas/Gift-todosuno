import Pools from "../models/Pools";

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
