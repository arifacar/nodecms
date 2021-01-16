/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();
var CategoryController = require('../controller/CategoryController');

router.post('/categorylist', CategoryController.getCategoryList);

router.post('/insertcategory', CategoryController.insertCategory);

router.post('/updatecategory', CategoryController.updateCategory);

router.post('/deletecategory', CategoryController.deleteCategory);

module.exports = router;