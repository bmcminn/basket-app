'use strict';

var path            = require('path')
,   bodyParser      = require('body-parser')
,   csrf            = require('csrf')
,   express         = require('express')
,   stormpath       = require('express-stormpath')
;


var router          = express.Router();
var parseForm       = bodyParser.urlencoded({ extended: false});
var csrfProtection  = csrf({ cookie: true });


// get List model
var List = require(path.resolve(process.cwd(), 'models', 'list'));


// define our route methods object
var routes = {

    // Get Lists
    getLists: function(req, res, next) {
        List.getLists(function(err, lists) {
            if (err) { throw err; }
            res.json(lists);
        }, 10);
    }


    // Add List
,   addList: function(req, res, next) {
        var list = req.body;

        List.addList(list, function(err, list) {
            if (err) { throw err; }
            res.json(list);
        }, 10);
    }


    // Update List
,   updateList: function(req, res, next) {
        var id      = req.params.id
        ,   list    = req.body
        ;

        List.updateList(id, list, {}, function(err, list) {
            if (err) { throw err; }
            res.json(list);
        });
    }


    // Get single List
,   getListById: function(req, res, next) {
        var id      = req.params.id
        ,   list    = req.body
        ;

        List.getListById(id, function(err, list) {
            if (err) { throw err; }
            res.json(list);
        });
    }


    // Delete single List
,   deleteList: function(req, res, next) {
        var id      = req.params.id
        ,   list    = req.body
        ;

        List.deleteList(id, function(err, list) {
            if (err) { throw err; }
            res.json(list);
        });
    }
};


// NOTE: defining our route methods as an array allows us to define route specific middleware
// SAUCE: https://github.com/stonecircle/express-autoroute#middlewares


// define our autoroute object to designate the routes and their methods
module.exports.autoroute = {
    get: {
        '/lists':     [ stormpath.apiAuthenticationRequired, routes.getLists ]
    ,   '/lists/:id': [ stormpath.apiAuthenticationRequired, routes.getListById ]
    }

,   post: {
        '/lists':     [ stormpath.apiAuthenticationRequired, routes.addList ]
    ,   '/lists/:id': [ stormpath.apiAuthenticationRequired, routes.updateList ]
    }

,   delete: {
        '/lists/:id': [ stormpath.apiAuthenticationRequired, routes.deleteList ]
    }
};



// export each route method for testing purposes
Object.keys(routes).forEach(function(key) {
    module.exports[key] = routes[key];
});

