var mongoose = require("mongoose");
var upvotes = new mongoose.Schema({
    mainUserId: { // logged in user
        type: mongoose.Types.ObjectId,
        ref: 'userDetails'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'userDetails'
    }
});

module.exports = mongoose.model('upvotes',upvotes);