import { Router } from "express";
import verifyTokenUser from "../middleware/verifyToken";
const router = Router();
var { userData, getAllUsers, activarUsuario, deleteUser, cambiarEstado, subirNivel } = require("../controller/User.controllers");


// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);
router.get("/data", userData);
router.post("/activarUsuario", activarUsuario);
router.delete("/deleteUser", deleteUser);
router.post("/cambiarEstadoComplete", cambiarEstado)
router.put("/subirNivel", subirNivel)

module.exports = router;
