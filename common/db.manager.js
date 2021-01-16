//import Sequelize
const Sequelize = require("sequelize");
const sequelizeConnection = require("./mysql");

//import models
const ContentModel = require("../model/Content");
const CategoryModel = require("../model/Category");

//Initialize Models
const Content = ContentModel(sequelizeConnection, Sequelize);
const Category = CategoryModel(sequelizeConnection, Sequelize);

//Create relations among models
Content.belongsTo(Category, {foreignKey: 'category_id'})

const db = {
    Content,
    Category,
    sequelizeConnection
}

module.exports = db;