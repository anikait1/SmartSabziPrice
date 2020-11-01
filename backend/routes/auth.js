import express from "express";
const router = express.Router();

//Validations
import {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator,
} from '../helpers/valid.js';

//Load Controllers
import {
    registerController,
    activationController,
    loginController,
    forgotPasswordController,
    resetPasswordController,
} from '../controllers/auth.controller.js';

router.post('/register', validSign,registerController);
router.post('/activation', activationController);
router.post('/login',validLogin,loginController);

router.put('/forgotpassword',forgotPasswordValidator,forgotPasswordController);
router.put('/resetpassword',resetPasswordValidator,resetPasswordController);

export default router;
