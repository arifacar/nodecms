let CategoryService = require('../service').CategoryService;

exports.save = (req, res) => {
    let data = req.body;
    CategoryService.save(req, res, data)
};

exports.update = (req, res) => {
    let data = req.body;
    CategoryService.update(req, res, data)
};

exports.delete = (req, res) => {
    CategoryService.delete(req, res)
};

exports.all = (req, res) => {
    let data = req.body;

    adjustRequest(data);

    CategoryService.all(req, res, data)
};

exports.get = (req, res) => {
    CategoryService.get(req, res)
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