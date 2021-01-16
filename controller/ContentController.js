var ContentService = require('../service').ContentService
var Response = require("../common/Response")

exports.getContentList = (req, res) => {
    var data = req.body

    console.log("HELLO")

    adjustRequest(data);

    res.json(data)

    // ContentService.getContentList(req, res, data)
};

function adjustRequest(data) {
    // TODO: Fix here, cognitive complexity :(

    if (typeof data.keyword === "undefined") {
        data.keyword = ""
    } else {
        data.keyword.toLowerCase()
    }

    if (typeof data.filter === "undefined") {
        data.filterData = ""
    } else {
        if (typeof data.filterBy === "undefined") {
            data.filterData = ""
        } else {
            data.filterData = data.filter.toLowerCase()
        }
    }

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

exports.insertContent = (req, res) => {
    var data = req.body

    ContentService.insertContent(req, res, data)
};

exports.updateContent = (req, res) => {
    var data = req.body

    ContentService.updateContent(req, res, data)
};

exports.deleteContent = (req, res) => {
    var data = req.body

    ContentService.deleteContent(req, res, data)
};

exports.getContentDetail = (req, res) => {
    ContentService.getContentDetail(req, res)
};