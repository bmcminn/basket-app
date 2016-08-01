
var express     = require('express');
var router      = express.router;


module.exports.home = function(req, res, next) {
    res.send('hello world');
};
