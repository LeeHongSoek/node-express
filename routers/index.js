var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('./routers/index 실행');
  res.render('index', { title: '자동업데이트 확인!' });
});

module.exports = router;
