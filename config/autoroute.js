var path = require('path')
;

module.exports = {
    throwErrors:    process.env.NODE_ENV === 'development' ? false : true
,   logger:         require('winston')
,   routesDir:      path.join(process.cwd(), 'routes')
};
