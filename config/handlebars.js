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
         * Returns the value of a collection key given a dynamic property name
         * @param  {collection}     context [description]
         * @param  {string}         context [description]
         * @return {string}         [description]
         */
    ,   prop:   function(context, value) {
            return context[value];
        }

        /**
         * Ifval allows Handlebars to use equality checks in templates
         * @param  {object/property}    conditional The model property we wish to check for a given set of values
         * @param  {string/int}         opts     The comparator(s) used for the evaluation
         * @return {string}             Returns given condition block results
         */
    ,   ifval:  function (conditional, opts) {
            console.log(conditional);
            console.log(opts.hash);

            console.log(opts.fn(this));

            if (opts.hash.value === conditional) {
                return opts.fn(this);
            } else {
                return opts.inverse(this);
            }
        }
    }
};
