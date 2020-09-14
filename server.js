const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');


// load the env vars
require('dotenv').config();

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const messagesRouter = require('./routes/messages');
const chatRouter = require('./routes/chat');
const driversRouter = require('./routes/drivers')
const teamsRouter = require('./routes/teams')
const landingPageRouter = require('./routes/landingpage')
const standingsRouter = require('./routes/standings')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.CLIENT_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// mount all routes with appropriate base paths
app.use('/users', usersRouter);
app.use('/auth', authRouter)
app.use('/', landingPageRouter)
app.use('/messages', messagesRouter);
app.use('/chatroom', chatRouter);
app.use('/drivers', driversRouter)
app.use('/teams', teamsRouter)
app.use('/standings', standingsRouter)

// invalid request, send 404 page
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('f1Error');
});

module.exports = app;

// adding note again
