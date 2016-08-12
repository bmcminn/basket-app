'use strict';


/**
 * Returns the value of a collection key given a dynamic property name
 * @param  {collection}     collection  A collection of data we want to get a specific value from
 * @param  {string}         key         The given key name of the value we want
 * @return {string}         The given key value from the collection
 */
module.exports = function(collection, key) {
    return collection[key];
};
