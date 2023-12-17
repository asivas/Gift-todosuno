import { Router } from "express";

const router = Router();
import verifyTokenUser from "../middleware/verifyToken";
var {
  createCuadros,
//  acceptPay,
  cuadroId,
  deleteCuadro,
  traerCuadroPadre,
  cuadroHijo
} = require("../controller/Cuadro.controller");

//router.post("/createCuadro", createCuadro);
//router.post("/acceptPay", acceptPay);

router.get("/:cuadroId", cuadroId);

router.get("/cuadroHijo/:cuadroId", cuadroHijo);

router.post("/createCuadros", createCuadros);

router.delete("/delete", deleteCuadro);

router.post("/traerCuadroPadre", traerCuadroPadre);


module.exports = router;
