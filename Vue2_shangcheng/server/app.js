var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
/////////////////////////
//->加载商品路由
var goods = require('./routes/goods');
////////////////////////

var app = express();


/////////////////////////
//->引入ejs
var ejs = require('ejs')
/////////////////////////


// view engine setup
app.set('views', path.join(__dirname, 'views'));
////////////////////////
//->设置模板引擎为ejs
app.engine('.html',ejs.__express);
app.set('view engine', 'html');
// app.set('view engine', 'jade');
////////////////////////


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//->这里写路由，一级路由
app.use('/', index);
app.use('/users', users);
app.use('/goods', goods);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
