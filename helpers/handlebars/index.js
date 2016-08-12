var path    = require('path')
,   fs      = require('grunt').file
;


var helpers = {};
var files   = fs.expand(path.resolve(__dirname, '**.js'));


/**
 * THIS PROCESS WILL ASSUME THE FILENAME IS THE DESIRED HANDLEBARS HELPER
 * NAME TO BE LOADED AND UTILIZED WITHIN YOUR HANDLEBARS TEMPLATES.
 */


files.forEach(function(filepath) {
    if (!filepath.match('index.js')) {

        var helperName = path.basename(filepath, '.js');

        helpers[helperName] = require(filepath);
    }
});


module.exports = helpers;
