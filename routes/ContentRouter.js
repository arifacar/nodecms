/**
 * Module dependencies.
 */
var express = require('express')
var router = express.Router()
var ContentController = require('../controller').ContentController

router.post('/save', ContentController.save)

router.put('/update', ContentController.update)

router.delete('/:id', ContentController.delete)

router.post('/', ContentController.list)

router.get('/:id', ContentController.get)

router.post('/search', ContentController.list)

module.exports = router;