var path    = require('path')
,   fs      = require('grunt').file
;


var helpers = {};
var files   = fs.expand(path.join(__dirname, '**.js'));


/**
 * THIS PROCESS WILL ASSUME THE FILENAME IS THE DESIRED HANDLEBARS HELPER
 * NAME TO BE LOADED AND UTILIZED WITHIN YOUR HANDLEBARS TEMPLATES.
 */

files.forEach(function(filepath) {
    if (!filepath.match('index.js')) {
        helpers[path.basename(filepath, '.js')] = require(filepath);
    }
});


// exports an object of named helper functions
module.exports = helpers;
