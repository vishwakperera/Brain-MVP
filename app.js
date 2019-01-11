var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/_index');
var mainViewRouter = require('./routes/_mainView');
var createIssueRouter = require('./routes/_createIssue');
var storeIssueRouter = require('./routes/_storeIssue');
var listIssueRouter = require('./routes/_listIssue');
var profileRouter = require('./routes/_profile');
var gameViewRouter = require('./routes/_gameView');
var normalViewRouter = require('./routes/_normalView');
var registerRouter = require('./routes/_register');
var storeUserRouter = require('./routes/_storeUser');
var loginRouter = require('./routes/_login');
var submitLogin = require('./routes/_submitLogin');
var statistics = require('./routes/_statistics');

var db;

var app = express();

// view engine setup
app.engine('ejs', require('express-ejs-extend'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
}));
app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/mainView', mainViewRouter);
app.use('/addIssue', createIssueRouter);
app.use('/storeIssue', storeIssueRouter);
app.use('/issueList', listIssueRouter);
app.use('/profile', profileRouter);
app.use('/gameView', gameViewRouter);
app.use('/normalView', normalViewRouter);
app.use('/register', registerRouter);
app.use('/storeUser', storeUserRouter);
app.use('/login', loginRouter);
app.use('/submitLogin', submitLogin);
app.use('/statistics', statistics);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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