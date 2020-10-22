import express from "express";
const router = express.Router();

//Load Controllers
import {registerController} from '../controllers/auth.controller.js';

router.post('/register', registerController);

export default router;
