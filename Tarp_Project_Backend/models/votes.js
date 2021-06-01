var mongoose = require("mongoose");
var votes = new mongoose.Schema({
    contentId: {
        type: mongoose.Types.ObjectId,
        ref: 'contents'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'userDetails'
    },
    upvote: {
        type: Boolean,
        default: false
    },
    downvote: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('votes',votes);