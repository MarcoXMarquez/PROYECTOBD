import { Router } from "express";
import {authController} from "../controllers/login.controller.js";

const router = Router();

router.get('/login', authController.showLogin);
router.post('/register', authController.register);
router.post('/login', authController.login);


export default router;