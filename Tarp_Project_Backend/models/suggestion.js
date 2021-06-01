var mongoose = require("mongoose");
var suggestions = new mongoose.Schema({
    contentId: {
        type: mongoose.Types.ObjectId,
        ref: 'contents'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'userDetails'
    },
});

module.exports = mongoose.model('suggestions',suggestions);