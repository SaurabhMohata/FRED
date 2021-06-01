var express = require('express');
var router = express.Router();
var config = require("../config");
var webCtrl = require("../controllers/webApi_controller");

var multer = require('multer');

function fileuploader(path){
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path)
        },
        filename: function (req, file, cb) {
            var path = file.originalname.split(".");
            cb(null, file.fieldname + '-' + Date.now() + "." + path[path.length - 1])
        }
    });

    return multer({storage: storage});
}

router.post('/signup', fileuploader("images/uploads").fields([{name: 'avatar', maxCount: 1}]), webCtrl.signupRequest); // .. "localhost:3000/webApi/signup"
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