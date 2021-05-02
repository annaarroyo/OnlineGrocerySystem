let express = require('express');
let router = express.Router();
const validator = require("./utils/validator");
const db = require('../database/connect')


const utilities = require("../routes/utils/utilities");
const logger = utilities.getLogger();

router.get('/:user', validator.getEmailLoginCheck, (req, res) => {db.checkLogin(req, res)});
router.post('/',  validator.postSignUpCheck, (req, res) => {console.log("User to insert " + req.body); db.saveAccount(req, res)})

module.exports = router;
