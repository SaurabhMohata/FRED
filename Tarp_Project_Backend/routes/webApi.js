var express = require('express');
var router = express.Router();
var config = require("../config");
var webCtrl = require("../controllers/webApi_controller");

var multer = require('multer');

function fileuploader(path){
    console.log("inside middleware = ",path);
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            console.log("inside desti");
            cb(null, path)
        },
        filename: function (req, file, cb) {
            console.log("inside function");
            var path = file.originalname.split(".");
            console.log("insjkafsdna");
            cb(null, file.fieldname + '-' + Date.now() + "." + path[path.length - 1])
            console.log("bla bla bla");
        }
    });

    return multer({storage: storage});
}
// const upload = new multer({
//     dest:'images/uploads',   //if we dont comment this than multer will save the data to the avatar folder but since it is commented the data is passed inside the callback function for route handler
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//             return cb(new Error('File must be jpg, jpeg or png'))
//         }
//         cb(undefined,true)  //error undefined and upload true
//     }
// })

router.post('/signup', fileuploader("images/uploads").fields([{name: 'avatar', maxCount: 1}]), webCtrl.signupRequest); // .. "localhost:3000/webApi/signup"
// router.post('/signup', upload.single('avatar'), webCtrl.signupRequest); // .. "localhost:3000/webApi/signup"
router.post('/signin', webCtrl.signinRequest);
router.post('/suggestion', config.authenticated, webCtrl.suggestion);
router.post('/contentListing', config.authenticated, webCtrl.contentListing);
router.post('/contentVote', config.authenticated, webCtrl.contentVote); // post approval
router.post('/reputationCount', config.authenticated, webCtrl.reputationCount); // pre approval
router.post('/userListing', config.authenticated, webCtrl.userListing);
router.post('/userUpvote', config.authenticated, webCtrl.userUpvote);
router.post('/userProfile', config.authenticated, webCtrl.userProfile);

// admin profile fullName: "Admin123" ...

module.exports = router;