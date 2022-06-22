const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

dotenv.config(); // .env 파일을 읽어온다.

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

if (process.env.NODE_ENV !== 'test')
	app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
