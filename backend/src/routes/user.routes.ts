import { Router } from "express";
import { loginUser, signUpUser } from "../controller/user.controller";

const router = Router()

// teting token
router.post('/login', loginUser)

router.post('/signup', signUpUser)

export default router