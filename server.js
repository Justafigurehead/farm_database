var express = require('express');
var app = express();
var bodyParser = require('bodyParser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers'));
