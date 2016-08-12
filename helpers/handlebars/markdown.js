'use strict';

var Handlebars  = require('handlebars');
var marked      = require('marked');


// setup marked instance for the `markdown` Handlebars helper
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});


/**
 * Compiles markdown contents of given block context
 * @param  {string} context  Block context of template section
 * @return {string}          Compiled markdown content with processed Handlebars template features included
 */
module.exports = function(context) {
    var md = marked(context.fn(this));
    return new Handlebars.SafeString(md);
};
