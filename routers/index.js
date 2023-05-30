var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('라우팅 : ./routers/index');
  res.render('index', { title: '타이틀 ./routers/index ' });
});

module.exports = router;
