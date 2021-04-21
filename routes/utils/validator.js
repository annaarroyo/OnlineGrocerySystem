const { param, body } = require('express-validator');

const getEmailLoginCheck = param('user', 'email is not in the speficied field or is empty').not().isEmpty();

const postInfoSignUp = [
  body('email', 'email is empty').not().isEmpty(),
  body('password', 'password is empty').not().isEmpty(),
  body('firstName', 'first name is empty').not().isEmpty(),
  body('lastName', 'last name is empty').not().isEmpty(),
  body('phoneNumber', 'phone number is empty').not().isEmpty(),
];

const postSignUpCheck = [postInfoSignUp];


module.exports = {getEmailLoginCheck , postSignUpCheck};
