var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//-> 这是二级路由
router.get('/test', function(req, res, next) {
  res.send('this is route test');
});


module.exports = router;
