// schema..

var mongoose = require("mongoose");
var userDetails = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profileImg:{
        type: String,
        default:null
    },
    signUpDate:{
        type: Date,
        default: Date.now()
    },
    reputation:{ // by upvotes (+1) from their profile or content approval (video/blog: 50, course: 500)
        type: Number,
        default: 0
    },
    // isReputed:{
    //     type: Boolean,
    //     default: false
    // },
    selfDescription:{
        type: String,
        default: null
    },
    github:{
        type: String,
        default: null
    },
    linkedin:{
        type: String,
        default: null
    },
    stackoverflow:{
        type: String,
        default: null
    }
});

module.exports = mongoose.model('userDetails',userDetails);