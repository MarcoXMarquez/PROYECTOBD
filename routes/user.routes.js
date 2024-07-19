import { Router } from "express";
import {crudUser} from "../controllers/user.controller.js";

const router = Router();

router.get('/crud_user', crudUser.read);
router.post('/crud_user', crudUser.cud);


export default router;