const { param, body } = require('express-validator');

const getEmailLoginCheck = param('user', 'email is not in the speficied field or is empty').not().isEmpty();

module.exports = {getEmailLoginCheck};