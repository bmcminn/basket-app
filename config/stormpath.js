var async = require('async')
;


module.exports = {
    enableAccountVerification: true
,   expandApiKeys: true
,   expandCustomData: true
,   redirectUrl: '/dashboard'
,   secretKey: process.env.STORMPATH_SERVER_APIKEY_SECRET
,   postRegistrationHandler: function(account, req, res, next) {
        async.parallel(
            [
                /**
                 * Define the base custom user data assigned after account registration
                 * @param  {Function} cb [description]
                 * @return {[type]}      [description]
                 */
                function(cb) {
                    account.customData.completed_new_user_walkthrough = false;
                    account.customData.preferred_language = 'en';
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
        ,   function(err) {
                if (err) { return cb(err); }
                next();
            })
        ;
    }

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
};
