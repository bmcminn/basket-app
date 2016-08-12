require('dotenv').load();

var async   = require('async')
,   uuid    = require('node-uuid')
;


module.exports = {

// Stormpath client configuration
//---------------------------------------------------------------------------

    client: {
        apiKey: {
            id:     process.env.STORMPATH_CLIENT_ID
        ,   secret: process.env.STORMPATH_CLIENT_SECRET
        }
    }

,   clientOptions: {
        cacheOptions: {
            store: 'memcached',
            options: {
                return_buffers: false
            },
            ttl: 1200,
            tti: 1200
        }
    }


// Stormpath Application configuration
//---------------------------------------------------------------------------

,   application: {
        href:   process.env.STORMPATH_APPLICATION_HREF
    }


// Misc Stormpath instance properties
//---------------------------------------------------------------------------

//     enableAccountVerification: false
,   expand: {
        expandApiKeys: true
    ,   customData: true
    }

// ,   redirectUrl: '/dashboard'
,   secretKey: process.env.STORMPATH_SESSION_SECRET


// Website configuration properties
//---------------------------------------------------------------------------

,   website: true
,   web: {
        // TODO: look into integrating app look and feel into the user interaction views
        // http://docs.stormpath.com/nodejs/express/latest/templates.html
        // [ ] Login page
        // [ ] registration page
        // [ ] forgot password page
        // [ ] change password page
        // [ ] email verification page
        logout: {
            enabled: true,
            uri: '/logout',
            nextUri: '/'
        }
    }


// User event and authorization handlers
//---------------------------------------------------------------------------

    /**
     * [postRegistrationHandler description]
     * @param  {[type]}   account [description]
     * @param  {[type]}   req     [description]
     * @param  {[type]}   res     [description]
     * @param  {Function} next    [description]
     * @return {[type]}           [description]
     */
,   postRegistrationHandler: function(account, req, res, next) {
        async.parallel(
            [
                /**
                 * Define the base custom user data assigned after account registration
                 * @param  {Function} cb [description]
                 * @return {[type]}      [description]
                 */
                function(cb) {
                    account.customData.userID                           = uuid.v1();
                    account.customData.completed_new_user_walkthrough   = false;
                    account.customData.preferred_language               = 'en';
                    account.customData.save(function(err) {
                        if (err) { return cb(err); }
                        cb();
                    });
                }

            ,   function(cb) {
                    account.createApiKey(function(err, key) {
                        if (err) { return cb(err); }
                        cb();
                    });
                }

            ]

            // callback to async.parallel that initializes each function we defined
        ,   function(err, results) {
                if (err) { return next(err); }
                next();
            })
        ;
    }
};
