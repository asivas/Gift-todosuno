import { Router } from "express";

const router = Router();
var {
  createPool,
  getAllPools,
  getPoolById,
} = require("../controller/Pools.controllers");

router.post("/createPool", createPool);
router.get("/allPools", getAllPools);
router.get("/getPool/:id", getPoolById);

module.exports = router;
