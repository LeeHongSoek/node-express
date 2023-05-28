var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('./routers/users 실행');
  res.send('respond with a resource');
});

module.exports = router;
