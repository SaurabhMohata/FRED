var mongoose = require("mongoose");
var counts = new mongoose.Schema({
    contentId: { // logged in user
        type: mongoose.Types.ObjectId,
        ref: 'contents'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'userDetails'
    }
});

module.exports = mongoose.model('counts',counts);