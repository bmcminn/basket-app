'use strict';


/**
 * Removes all spaces between tag elements to "minify" the given view context markup
 * @param  {string} context     The section of markup one wishes to minify
 * @return {string}             The minified markup
 */
module.exports = function(context) {
    return context.fn(this).replace(/(\>)\s+(\<)/gi, '$1$2');
};
