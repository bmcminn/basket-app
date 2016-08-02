
var express     = require('express');
var router      = express.router;


// define our autoroute object to designate the routes and their methods
var routes = {

    home: function(req, res, next) {
        res.render('home');
    }

,   about: function(req, res, next) {
        res.render('about', { page: { title: 'about page' }});
    }

,   contact: function(req, res, next) {
        res.render('contact', { page: { title: 'contact page' }});
    }

,   privacy: function(req, res, next) {
        res.render('privacy', { page: { title: 'privacy page' }});
    }

,   terms: function(req, res, next) {
        res.render('terms', { page: { title: 'terms page' }});
    }

};


// NOTE: defining our route methods as an array allows us to define route specific middleware
// SAUCE: https://github.com/stonecircle/express-autoroute#middlewares
module.exports.autoroute = {
    get: {
        '/':            [ routes.home ]
    ,   '/about':       [ routes.about ]
    ,   '/contact':     [ routes.contact ]
    ,   '/privacy':     [ routes.privacy ]
    ,   '/terms':       [ routes.terms ]
    }
};


// export each routeMethod for testing purposes
Object.keys(routes).forEach(function(key) {
    module.exports[key] = routes[key];
});
