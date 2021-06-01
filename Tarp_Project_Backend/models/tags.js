var mongoose = require("mongoose");
var tags = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contentId: {
        type: mongoose.Types.ObjectId,
        ref: 'contents'
    },
});

module.exports = mongoose.model('tags',tags);