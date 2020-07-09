const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backEndAngular', {useNewUrlParser: true, useUnifiedTopology: true});

const companyRoutes = require('./api/routes/companyRoutes');
const productsRoutes = require('./api/routes/productsRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/company', companyRoutes);
app.use('/products', productsRoutes)

module.exports = app;
