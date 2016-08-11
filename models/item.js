var mongoose = require('mongoose');


var itemSchema = mongoose.Schema({
    name: {
        type: String
    ,   required: true
    }
,   list_id: {
        type: String
    ,   require: true
    }
,   create_date: {
        type: Date
    ,   default: Date.now
    }
});


var Item = module.exports = mongoose.model('Item', itemSchema);


// Get Items
module.exports.getItems = function(cb, limit) {
    Item.find(cb).limit(limit);
};


// Add Item
module.exports.addItem = function(item, cb) {
    Item.create(item, cb);
};


// Get specific Item
module.exports.getItemById = function(id, cb) {
    Item.findById(id, cb);
};


// Update specific Item
module.exports.updateItem = function(id, item, cb) {
    var query = {_id: id};

    var update = {
        name: Item.name
    };

    var options = {};

    Item.findOneAndUpdate(query, update, options, cb);
};


// Delete specific Item
module.exports.deleteItem = function(id, genre, cb) {
    var query = {_id: id};
    Item.remove(query, cb);
};

