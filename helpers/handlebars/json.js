'use strict';


/**
 * Converts a given model property into a JSON string
 * @note    Preferably reserved for debugging use
 * @param  {object|collection}  data    Object or collection of data to be stringified
 * @return {string}                     Stringified contents in JSON format
 */
module.exports = function(data) {
    return JSON.stringify(data);
};
