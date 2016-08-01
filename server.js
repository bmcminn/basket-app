'use strict';

// load our environment configuration
require('dotenv').load();

// define utility instances
var path            = require('path')
,   express         = require('express')
,   hbs             = require('express-handlebars')
,   bodyParser      = require('body-parser')
,   cookieParser    = require('cookie-parser')
,   logger          = require('morgan')
,   pkg             = require('./package.json')
;


// initialize our express application object
var app = express();


// setup middlewares
app.use(logger(process.env.NODE_ENV));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({type: '*/*'}));

app.use(cookieParser());


// setup Express to use handlebars as runtime view engine
app.engine(process.env.HBS_FILE_EXT, hbs(require('./config/handlebars')));

app.set('views',        path.join(__dirname, process.env.HBS_VIEWS_DIR));
app.set('view engine',  process.env.HBS_FILE_EXT);



// define base locals
app.locals.site = {
    title:      pkg.appName
,   version:    pkg.version
};


// setup node server to resolve static assets
app.use('/public', express.static(process.env.EXPRESS_STATIC));


// TODO: replace with actual routes
// assign our routes middlewares
var routes = require('./routes');

app.use('/', routes.home);


// cactch 404 and forward err handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: (app.get('env') === 'development' ? err : {})
    });
    next(err);
});


// issue port address and start server
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log(`Server started on port ${app.get('port')}`);
});


// export app object for testing
module.exports = app;