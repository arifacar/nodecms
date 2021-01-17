module.exports = {
    HOST: "192.168.64.9",
    DIALECT: 'mysql',
    DB_NAME: 'nodecms',
    DB_USER: 'test',
    DB_PASS: 'test',
    APP_PORT: 3000,
    PAGE_ITEM: 10
};

// sequelize-auto -o "./models" -d nodecms -h 192.168.64.9 -u test -p 3306 -x test -e mysql
