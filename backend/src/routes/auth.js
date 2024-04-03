import { Router } from "express";

const router = Router();
var {
  registerUser,
  loginUser,
  registerUserFree,
} = require("../controller/Auth.controllers");

router.post("/createUser/:referralUser?", registerUser);
router.post("/createUserFree", registerUserFree);
/* crear usuario */
router.post("/login", loginUser);

module.exports = router;
