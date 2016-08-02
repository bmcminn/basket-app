var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
    username: {
        type: String
    ,   required: true
    }
,   firstName: {
        type: String
    ,   required: true
    }
,   lastName: {
        type: String
    ,   required: true
    }
,   avatar_url: {
        type: String
    }
,   create_date: {
        type: Date
    ,   default: Date.now
    }
});


var User = module.exports = mongoose.model('User', userSchema);


// Get Users
module.exports.getUsers = function(cb, limit) {
    User.find(cb).limit(limit);
};


// Add User
module.exports.addUser = function(user, cb) {
    User.create(user, cb);
};


// Get specific User
module.exports.getUserById = function(id, cb) {
    User.findById(id, cb);
};


// Update specific User
module.exports.updateUser = function(id, user, cb) {
    var query = {_id: id};
    var update = {
        name: User.name
    };
    User.findOneAndUpdate(query, update, options, cb);
};


// Delete specific User
module.exports.deleteUser = function(id, genre, cb) {
    var query = {_id: id};
    User.remove(query, cb);
};
