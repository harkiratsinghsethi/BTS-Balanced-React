const express = require('express');
const controller = require('../controller/controller.js');

let router = express.Router();
router.route('/getX').get(controller.getX);
module.exports = router;
