var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '이런 씨바 세이~!!' });
});

module.exports = router;
