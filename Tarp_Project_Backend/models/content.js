var mongoose = require("mongoose");
var contents = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    type:{ // video, blog, course
        type: String,
        default:null
    },
    status:{ // suggested - false / approved - true....  // approved if >=5000
        type: Boolean,
        default:false
    },
    upvotes:{ // post approval
        type: Number,
        default: 0
    },
    downvotes:{ // post approval
        type: Number,
        default: 0
    },
    reputationCount:{ // pre approval
        type: Number,
        default: 0
    },
    // admin_approval:{
    //     type: Boolean,
    //     default:false
    // },
    language:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('contents',contents);