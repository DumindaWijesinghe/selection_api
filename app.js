const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv').config();
const db = require('./db');
const cors = require('cors');

const SelectionController = require('./selection/SelectionController');

app.use(cors()) // enable cross-origin resource sharing

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1/selection', SelectionController);

module.exports = app;