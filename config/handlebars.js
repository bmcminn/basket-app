module.exports = {
    extname:        process.env.HBS_FILE_EXT
,   defaultLayout:  process.env.HBS_DEFAULT_LAYOUT
,   helpers: {
        /**
         * [json description]
         * @param  {[type]} context [description]
         * @return {[type]}         [description]
         */
        json:   function(context) { return JSON.stringify(context); }

        /**
         * Ifval allows Handlebars to use equality checks in templates
         * @param  {object/property}    conditional The model property we wish to check for a given set of values
         * @param  {string/int}         options     The comparator(s) used for the evaluation
         * @return {string}             Returns given condition block results
         */
    ,   ifval:  function (conditional, options) {
            if (options.hash.value === conditional) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        }
    }
};
