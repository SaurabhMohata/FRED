var express = require('express');
var router = express.Router();

//Pages Routes
router.get('/', function (req, res, next) {
  res.render('login');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

module.exports = router;