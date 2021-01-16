/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();
var CommonController = require('../controller/CommonController');

router.get('/', CommonController.main);

router.post('/login', CommonController.login);

router.get('/logout', CommonController.logout);

module.exports = router;