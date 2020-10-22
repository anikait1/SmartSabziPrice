import User from "../models/User.js";

//Used for verifying JSON Web tokens
import expressJwt from "express-jwt";

// contains tools to simplify programming with strings, numbers, arrays, functions
import _ from "lodash";

//TO authenticate with google services
const { OAuth2Client } = 'google-auth-library';
import fetch from "node-fetch";

//For enabling require keyword
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

//For server side data validation and sanitization
const { validationResult } = require('express-validator');

//Securily transmitting info
import jwt from "jsonwebtoken";

//Sending Mails
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.MAIL_KEY);

//Custom Error Handler
import { errorHandler } from "../helpers/dbErrorHandling.js";

export function registerController(req, res) {
  const { name, email, password } = req.body;
  
  //Check for Error in data contained in body
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    User.findOne({
      email
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          errors: 'Email is taken'
        });
      }
    });

    //Generate Token
    const token = jwt.sign(
      {
        name,
        email,
        password
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: '10m'
      }
    );

    //Email Data
    const emailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Account activation link',
      html: `
                <h1>Please Click the following Link to activate your account</h1>
                <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                <hr />
                <p>This email may containe sensitive information</p>
                <p>${process.env.CLIENT_URL}</p>
            `
    };

    sgMail
      .send(emailData)
      .then(sent => {
        return res.json({
          message: `Email has been sent to ${email}`
        });
      })
      .catch(err => {
        return res.status(400).json({
          success: false,
          errors: errorHandler(err)
        });
      });
  }

}
