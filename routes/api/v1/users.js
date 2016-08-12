'use strict';

var path            = require('path')
,   bodyParser      = require('body-parser')
,   csrf            = require('csrf')
,   express         = require('express')
,   stormpath       = require('express-stormpath')
;


// var router          = express.Router();
// var parseForm       = bodyParser.urlencoded({ extended: false});
// var csrfProtection  = csrf({ cookie: true });


// get User model
var User = require(path.resolve(process.cwd(), 'models', 'user'));


// define our route methods object
var routes = {

    // Get Users
    getUsers: function(req, res, next) {
        User.getUsers(function(err, users) {
            if (err) { throw err; }
            res.json(users);
        }, 10);
    }


    // Add User
,   addUser: function(req, res, next) {
        var user = req.body;

        User.addUser(user, function(err, user) {
            if (err) { throw err; }
            res.json(user);
        }, 10);
    }


    // Update User
,   updateUser: function(req, res, next) {
        var id      = req.params.id
        ,   user    = req.body
        ;

        User.updateUser(id, user, {}, function(err, user) {
            if (err) { throw err; }
            res.json(user);
        });
    }


    // Get single User
,   getUserById: function(req, res, next) {
        var id      = req.params.id
        ,   user    = req.body
        ;

        User.getUserById(id, function(err, user) {
            if (err) { throw err; }
            res.json(user);
        });
    }


    // Delete single User
,   deleteUser: function(req, res, next) {
        var id      = req.params.id
        ,   user    = req.body
        ;

        User.deleteUser(id, function(err, user) {
            if (err) { throw err; }
            res.json(user);
        });
    }
};


// NOTE: defining our route methods as an array allows us to define route specific middleware
// SAUCE: https://github.com/stonecircle/express-autoroute#middlewares


// define our autoroute object to designate the routes and their methods
module.exports.autoroute = {
    get: {
        '/users':     [ routes.getUsers ]
    ,   '/users/:id': [ routes.getUserById ]
    }

,   post: {
        '/users':     [ routes.addUser ]
    ,   '/users/:id': [ routes.updateUser ]
    }

// NOTE: Deleting user models shouldn't be a publicly exposed API endpoint
// ,   delete: {
//         '/users/:id': [ stormpath.apiAuthenticationRequired, routes.deleteUser ]
//     }
};


// export each route method for testing purposes
Object.keys(routes).forEach(function(key) {
    module.exports[key] = routes[key];
});

