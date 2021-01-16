module.exports = (sequelize, Sequelize) => {
    var Category = sequelize.define('t_category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        permalink: Sequelize.STRING,
        parent: Sequelize.INTEGER,
        order_no: Sequelize.STRING,
        color: Sequelize.STRING
    }, {
        underscored: true,
        timestamps: false,
        createAt: false,
        paranoid: true,
        freezeTableName: true
    });

    return Category
}