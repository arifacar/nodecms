var express = require('express')
var router = express.Router()
var ContentController = require('../controller/ContentController')

router.post('list', ContentController.getContentList)

router.post('insertcontent', ContentController.insertContent)

router.post('updatecontent', ContentController.updateContent)

router.post('/deletecontent', ContentController.deleteContent)

router.post('/searchcontent', ContentController.getContentList)

router.get('/contentdetail/:id', ContentController.getContentDetail)

module.exports = router;