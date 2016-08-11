var async   = require('async')
,   path    = require('path')
,   fs      = require('grunt').file
;


// ===========================================================================
//  SETUP ENVIRONMENT CONFIG FILE

var envFile = [
    '; NODE ENVIRONMENT STUFFS'
,   'NODE_ENV=dev'
,   '\s'
,   '; APP SPECIFIC INFORMATION'
,   'APP_DOCS_LINK=https://github.com/bmcminn/basket-app/blob/master/docs/api.md'
,   '\s'
,   '; EXPRESS CONFIG PROPERTIES'
,   'EXPRESS_STATIC=public'
,   '\s'
,   '; LAYOUT ENGINE PROPERTIES'
,   'HBS_FILE_EXT        = ".hbs"'
,   'HBS_VIEWS_DIR       = "views"'
,   '; HBS_LAYOUTS_DIR     = "views/layouts"'
,   '; HBS_PARTIALS_DIR    = "views/partials"'
,   'HBS_DEFAULT_LAYOUT  = "main"'
,   '\s'
,   '; STORMPATH AUTHENTICATION CREDENTIALS'
,   'STORMPATH_CLIENT_APIKEY_ID         = GET_THIS_FROM_THE_STORMPATH_CONFIGURATION_DOCS'
,   'STORMPATH_CLIENT_APIKEY_SECRET     = GET_THIS_FROM_THE_STORMPATH_CONFIGURATION_DOCS'
,   'STORMPATH_APPLICATION_HREF         = GET_THIS_FROM_THE_STORMPATH_CONFIGURATION_DOCS'
,   '\s'
,   'STORMPATH_SESSION_SECRET           = MAKE_THIS_SOMETHING_UNIQUE'
,   '\s'
,   '; MONGO CONNECTOR CREDENTIALS'
,   'MONGO_USER_SN       = GET_THIS_FROM_THE_MONGOLABS_CONFIGURATION_SETTINGS'
,   'MONGO_USER_PW       = GET_THIS_FROM_THE_MONGOLABS_CONFIGURATION_SETTINGS'
,   'MONGO_DB_LOCATION   = GET_THIS_FROM_THE_MONGOLABS_CONFIGURATION_SETTINGS'
].join('\n');

var envFilepath = path.resolve(process.cwd(), '.env');

if (!fs.exists(envFilepath)) {
    fs.write(envFilepath, envFile);
}


// ===========================================================================
//  SETUP MISSING FOLDER STRUCTURES

var folders = [
    'public/css'
,   'public/js'
,   'public/img'
];

folders.forEach(function(folderpath) {
    fs.mkdir(path.resolve(process.cwd(), folderpath));
});
