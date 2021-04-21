const { param, body } = require('express-validator');

const getEmailLoginCheck = param('user', 'email is not in the speficied field or is empty').not().isEmpty();

const getInfoSignUp: [
  param('user', 'email is empty').not().isEmpty(),
  param('password', 'password is empty').not().isEmpty(),
  param('firstName', 'first name is empty').not().isEmpty(),
  param('lastName', 'last name is empty').not().isEmpty(),
  param('phoneNumber', 'phone number is empty').not().isEmpty()
]

module.exports = {getEmailLoginCheck , getInfoSignUp};
