/*Sequelize mysql*/
var config = require('../config/config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASS, {
        host: config.HOST,
        dialect: config.DIALECT
    },
    {query: {raw: true}}
);

module.exports = sequelize;