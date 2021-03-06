let db = require("../common/db.manager");
let config = require('../config/config');
let Response = require("../common/Response");
const {Op} = require("sequelize");

exports.list = async (req, res, data) => {
    try {
        let offset = Number(data.page - 1) * config.PAGE_ITEM

        const contentList = await db.Content.findAndCountAll({
            offset: offset,
            limit: config.PAGE_ITEM,
            order: [[data.sort, data.sortBy]],
            include: [{
                model: db.Category,
                nested: true,
                where: {
                    permalink: {[Op.substring]: [data.filterBy]}
                }
            }],
            where: {
                title: {[Op.substring]: [data.keyword]}
            }
        });

        contentList.currentPage = data.page

        res.json(Response.setSuccessMessages(contentList))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.save = async (req, res, data) => {
    try {
        const insertedContent = await db.Content.create(data);
        res.json(Response.setSuccessMessages(insertedContent))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.update = async (req, res, data) => {
    try {
        const updatedContent = await db.Content.update(data, {where: {id: data.id}});
        res.json(Response.setSuccessMessages(updatedContent))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.delete = (req, res) => {
    try {
        const deleteResponse = db.Content.destroy({
            where: {
                id: req.params.id
            }
        });

        res.json(Response.setSuccessMessages(deleteResponse))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }
}

exports.get = async (req, res) => {
    try {
        const content = await db.Content.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Category,
                nested: true
            }],
            nested: true,
        });

        res.json(Response.setSuccessMessages(content))
    } catch (err) {
        res.json(Response.setErrorMessages(err))
    }

}