var db = require("../common/db.manager")
var config = require('../config/config');
var Response = require("../common/Response")

exports.getCategoryList = async (req, res, data) => {
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

exports.insertCategory = async (req, res, data) => {
    try {
        const insertedCategory = await db.Category.create(data);
        res.json(Response.setSuccessMessages(insertedCategory))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.updateCategory = async (req, res, data) => {
    try {
        const updatedCategory = await db.Category.update(data, {where: {id: data.id}});
        res.json(Response.setSuccessMessages(updatedCategory))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.deleteCategory = async (req, res, data) => {
    try {
        const deletedCategory = await db.Category.destroy({
            where: {
                id: data.id
            }
        });
        res.json(Response.setSuccessMessages(deletedCategory))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}