/**
 * Module dependencies.
 */
var express = require('express')
var router = express.Router()
var CategoryController = require('../controller').CategoryController

router.post('/save', CategoryController.save)

router.put('/update', CategoryController.update)

router.delete('/:id', CategoryController.delete)

router.post('/', CategoryController.all)

router.get('/:id', CategoryController.get)


module.exports = router