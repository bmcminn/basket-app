'use strict';


/**
 * Ifval allows Handlebars to use equality checks in templates
 * @param  {object/property}    conditional The model property we wish to check for a given set of values
 * @param  {string/int}         opts     The comparator(s) used for the evaluation
 * @return {string}             Returns given condition block results
 */
module.exports = function (conditional, opts) {
    if (opts.hash.value === conditional) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
};

