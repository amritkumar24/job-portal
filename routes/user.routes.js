import express from "express";
import {getRegister, postRegister, getLogin, postLogin, logout} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/register", getRegister);
router.post("/register", postRegister);
router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/logout", logout);

export default router;