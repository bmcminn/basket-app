
var path = require('path')
;

var hbsHelpers = path.resolve(process.cwd(), 'helpers/handlebars');


module.exports = {
    extname:        process.env.HBS_FILE_EXT
,   defaultLayout:  process.env.HBS_DEFAULT_LAYOUT
,   helpers:        require(hbsHelpers)
};
