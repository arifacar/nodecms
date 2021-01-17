let db = require("../common/db.manager")
let config = require('../config/config')
let Response = require("../common/Response")

exports.save = async (req, res, data) => {
    try {
        const insertedCategory = await db.Category.create(data);
        res.json(Response.setSuccessMessages(insertedCategory))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.update = async (req, res, data) => {
    try {
        const updatedCategory = await db.Category.update(data, {where: {id: data.id}});
        res.json(Response.setSuccessMessages(updatedCategory))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.delete = async (req, res) => {
    try {
        const deletedCategory = await db.Category.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(Response.setSuccessMessages(deletedCategory))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}


exports.all = async (req, res, data) => {
    try {
        let offset = Number(data.page - 1) * config.PAGE_ITEM
        const categoryList = await db.Category.findAndCountAll({
            offset: offset,
            limit: config.PAGE_ITEM,
            order: [[data.sort, data.sortBy]],
            raw: true
        });

        res.json(Response.setSuccessMessages(categoryList))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.get = async (req, res) => {
    try {
        const category = await db.Category.findOne({
            where: {
                id: req.params.id
            },
            nested: true,
        });

        res.json(Response.setSuccessMessages(category))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }

}