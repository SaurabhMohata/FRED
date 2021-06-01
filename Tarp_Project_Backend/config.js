// Connection with databases.. token verification.. user authentication..

require("dotenv").config();
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

//Generate Access Token.
function generateAccessToken(userData) { // userData is id of the user..
    return jwt.sign(userData, process.env.LOGIN_TOKEN, { expiresIn: process.env.LOGIN_EXP_IN_DAYS + 'd' });
}

//Authenticate Access Token.
function authenticated(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log('bearerHeader' + bearerHeader);
    //console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        jwt.verify(token, process.env.LOGIN_TOKEN, (err, auth) => {
            if (err) {
                res.status(401).json({
                    Message: "Unauthorised request",
                    Data: 0,
                    IsSuccess: false
                });
            } else {
                req.token = auth;
                console.log("Authorization Success.");
            }
        });
        next();
    } else {
        res.status(401).json({
            Message: "Unauthorised request",
            Data: 0,
            IsSuccess: false
        });
    }
}

//Connecting with mongoDB Database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection
    .once('open', () => console.log("Well done! , connected with mongoDB database"))
    .on('error', error => console.log("Opps! database connection error:" + error));

module.exports = {
    generateAccessToken,
    authenticated,
    mongoose
}