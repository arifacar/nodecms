var HomeService = require('../service').HomeService
var config = require('../config/config');
var async = require('async');

exports.main = (req, res, next) => {

    var data = {
        statusCode: 10,
        statusDesc: "Running...",
    }

    res.json(data)
};

exports.login = (req, res, next) => {

    // TODO: This is dummy, will be implemented
    var data = {
        statusCode: 10,
        statusDesc: "hoşgeldiniz :)",
        token: "QSDK3feedcdeccfa56f536a1e9ddc92275e7e78025640882eb106964622e6d9edf36eaca970a00d27710e7e88c38f54239d1c7\n" +
            "6fe583f00bcd2e026f21292",
        username: "arifacar",
        name: "Arif",
        surname: "Acar"

    }
    res.json(data)
};


exports.logout = (req, res, next) => {

    // TODO: This is dummy, will be implemented
    var data = {
        statusCode: 10,
        statusDesc: "See you :)"
    }
    res.json(data)
};