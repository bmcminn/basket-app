
var express     = require('express');
var router      = express.router;

var stormpath   = require('express-stormpath');


// define our autoroute object to designate the routes and their methods
var routes = {

    root: function(req, res, next) {
        res.json({
            "type": "info"
        ,   "message": "Welcome to the Basket API. To get started, visit our API docs: https://github.com/bmcminn/basket-app/blob/master/docs/api.md"
        });
    }

};


// NOTE: defining our route methods as an array allows us to define route specific middleware
// SAUCE: https://github.com/stonecircle/express-autoroute#middlewares
module.exports.autoroute = {
    get: {
        '/':    [ stormpath.loginRequired, routes.root ]
    }
};


// export each routeMethod for testing purposes
Object.keys(routes).forEach(function(key) {
    module.exports[key] = routes[key];
});
