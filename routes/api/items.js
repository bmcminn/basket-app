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


// get ListItem model
var ListItem = require(path.resolve(process.cwd(), 'models', 'item'));


// NOTE: defining our route methods as an array allows us to define route specific middleware
// SAUCE: https://github.com/stonecircle/express-autoroute#middlewares


// define our route methods object
var routes = {

    // Get ListItems
    getListItems: function(req, res, next) {
        ListItem.getListItems(function(err, items) {
            if (err) { throw err; }
            res.json(items);
        }, 10);
    }


    // Add ListItem
,   addListItem: function(req, res, next) {
        var listItem = req.body;

        ListItem.addListItem(listItem, function(err, listItem) {
            if (err) { throw err; }
            res.json(listItem);
        }, 10);
    }


    // Update ListItem
,   updateListItem: function(req, res, next) {
        var id          = req.params.id
        ,   listItem    = req.body
        ;

        ListItem.updateListItem(id, listItem, {}, function(err, listItem) {
            if (err) { throw err; }
            res.json(listItem);
        });
    }


    // Get single ListItem
,   getListItemById: function(req, res, next) {
        var id      = req.params.id
        ,   listItem    = req.body
        ;

        ListItem.getListItemById(id, function(err, listItem) {
            if (err) { throw err; }
            res.json(listItem);
        });
    }


    // Delete single ListItem
,   deleteListItem: function(req, res, next) {
        var id      = req.params.id
        ,   listItem    = req.body
        ;

        ListItem.deleteListItem(id, function(err, listItem) {
            if (err) { throw err; }
            res.json(listItem);
        });
    }
};


// define our autoroute object to designate the routes and their methods
module.exports.autoroute = {
    get: {
        '/items':     [ stormpath.apiAuthenticationRequired, routes.getListItems ]
    ,   '/items/:id': [ stormpath.apiAuthenticationRequired, routes.getListItemById ]
    }

,   post: {
        '/items':     [ stormpath.apiAuthenticationRequired, routes.addListItem ]
    ,   '/items/:id': [ stormpath.apiAuthenticationRequired, routes.updateListItem ]
    }

,   delete: {
        '/items/:id': [ stormpath.apiAuthenticationRequired, routes.deleteListItem ]
    }
};





// export each route method for testing purposes
Object.keys(routes).forEach(function(key) {
    module.exports[key] = routes[key];
});

