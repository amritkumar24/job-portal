import express from "express";
import {registerValidation, loginValidation} from "../middleware/form.validation.js";
import validateRequest from "../middleware/validation.middleware.js";
import {getRegister, postRegister, getLogin, postLogin, logout} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/register", getRegister);
router.post("/register",registerValidation, validateRequest("register"), postRegister);
router.get("/login", getLogin);
router.post("/login",loginValidation, validateRequest("login"), postLogin);
router.get("/logout", logout);

export default router;