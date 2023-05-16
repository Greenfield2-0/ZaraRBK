import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

import {getUser, signupUser, userLogin }  from '../controller/users';

router.get("/getAll", getUser);
router.post("/signup", signupUser)
router.post("/login", userLogin)

export default router 