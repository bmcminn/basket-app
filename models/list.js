var mongoose = require('mongoose');


var listSchema = mongoose.Schema({
    name: {
        type: String
    ,   required: true
    }
,   create_date: {
        type: Date
    ,   default: Date.now
    }
});


var List = module.exports = mongoose.model('List', listSchema);


// Get Lists
module.exports.getLists = function(cb, limit) {
    List.find(cb).limit(limit);
};


// Add List
module.exports.addList = function(list, cb) {
    List.create(list, cb);
}


// Get specific List
module.exports.getListById = function(id, cb) {
    List.findById(id, cb);
}


// Update specific List
module.exports.updateList = function(id, list, cb) {
    var query = {_id: id};
    var update = {
        name: list.name
    };
    List.findOneAndUpdate(query, update, options, cb);
}


// Delete specific List
module.exports.deleteList = function(id, genre, cb) {
    var query = {_id: id};
    List.remove(query, cb);
}

