var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('라우팅 : ./routers/users');
  res.send('./routers/users 로 호출되었습니다.');
});

module.exports = router;
