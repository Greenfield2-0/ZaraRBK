import express, { Router, Request, Response } from "express";
import authenticate from "../middleware/userMiddle"
const router: Router = express.Router();

import {getUser, signupUser, userLogin, getOneOrderId }  from '../controller/users';

router.get("/getAll", getUser);
router.post("/signup", signupUser)
router.post("/login", userLogin)
router.get("/one/:username", getOneOrderId)

export default router 