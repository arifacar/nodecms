var CategoryService = require('../service').CategoryService
var config = require('../config/config');
var async = require('async');

exports.getCategoryList = (req, res, next) => {
    var data = req.body

    adjustRequest(data);

    CategoryService.getCategoryList(req, res, data)
};

function adjustRequest(data) {
    if (typeof data.page === "undefined") {
        data.page = 1
    }

    if (typeof data.sort === "undefined") {
        data.sort = "id"
    }

    if (typeof data.sortBy === "undefined") {
        data.sortBy = "DESC"
    }
}

exports.insertCategory = (req, res) => {
    var data = req.body

    CategoryService.insertCategory(req, res, data)
};

exports.updateCategory = (req, res) => {
    var data = req.body

    CategoryService.updateCategory(req, res, data)
};

exports.deleteCategory = (req, res) => {
    var data = req.body

    CategoryService.deleteCategory(req, res, data)
};