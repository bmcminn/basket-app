'use strict';

// load our environment configuration
require('dotenv').load();


// define utility instances
var path            = require('path')
,   express         = require('express')
,   hbs             = require('express-handlebars')
,   stormpath       = require('express-stormpath')
,   i18n            = require('i18n-express')
,   i18nConfig      = require('./config/i18n')
,   bodyParser      = require('body-parser')
,   cookieParser    = require('cookie-parser')
,   mongoose        = require('mongoose')
,   logger          = require('morgan')
,   pkg             = require('./package.json')
;


// initialize our express application object
var app = express();


// define base local variables
app.locals.site = {
    title:      pkg.appName
,   version:    pkg.version
,   locales:    i18nConfig.siteLangs
};


// setup middlewares
app.use(logger(process.env.LOGGING_METHOD));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({type: '*/*'}));

app.use(cookieParser());


// connect to mongo DB instance
mongoose.connect(`mongodb://${process.env.MONGO_USER_SN}:${process.env.MONGO_USER_PW}@${process.env.MONGO_DB_LOCATION}`);
var db = mongoose.connection;


// setup Express to use handlebars as runtime view engine
app.engine(process.env.HBS_FILE_EXT, hbs(require('./config/handlebars')));

app.set('views',        path.join(__dirname, process.env.HBS_VIEWS_DIR));
app.set('view engine',  process.env.HBS_FILE_EXT);


// setup i18n support
app.use(i18n(require('./config/i18n')));


// setup node server to resolve static assets
app.use(express.static(process.env.EXPRESS_STATIC_DIR));


// initialize stormpath middleware integration
app.use(stormpath.init(app, require('./config/stormpath')));


// establish our routes
app.use('/api', stormpath.apiAuthenticationRequired);
var autoroute = require('express-autoroute');
autoroute(app, require('./config/autoroute'));



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

app.on('stormpath.ready', function() {
    app.listen(app.get('port'), function() {
        console.log(`Server started on port ${app.get('port')}`);
    });
});


// export app object for testing
module.exports = app;
