module.exports = (sequelize, Sequelize) => {
    let Content = sequelize.define('t_content', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: Sequelize.INTEGER,
        parent_id: Sequelize.INTEGER,
        title: Sequelize.STRING,
        slug: Sequelize.STRING,
        summary: Sequelize.STRING,
        image: Sequelize.STRING,
        content: Sequelize.STRING,
        category_id: Sequelize.INTEGER,
        status: Sequelize.INTEGER,
        created_at: Sequelize.STRING,
        updated_at: Sequelize.STRING,
        published_at: Sequelize.STRING,
        view: Sequelize.INTEGER,
    }, {
        underscored: true,
        timestamps: false,
        createAt: true,
        paranoid: true,
        freezeTableName: true,
    });

    // sequelize.sync()

    return Content
}