let express = require('express');
let router = express.Router();
const validator = require("./utils/validator");
const db = require('../database/connect')


const utilities = require("../routes/utils/utilities");
const logger = utilities.getLogger();

router.get('/', (req, res) => {db.getProducts(req, res)});

module.exports = router;