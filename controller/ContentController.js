let ContentService = require('../service').ContentService;

exports.save = (req, res) => {
    let data = req.body;
    ContentService.save(req, res, data)
};

exports.update = (req, res) => {
    let data = req.body;
    ContentService.update(req, res, data)
};

exports.delete = (req, res) => {
    ContentService.delete(req, res)
};

exports.list = (req, res) => {
    let data = req.body;
    adjustRequest(data);

    ContentService.list(req, res, data)
};

exports.get = (req, res) => {
    ContentService.get(req, res)
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