/*jshint node:true*/
'use strict';

var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 8001;
var four0four = require('./utils/404')();
var environment = process.env.NODE_ENV;


module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());    
    //app.use(logger('dev'));

    app.disable('x-powered-by');

    load('models', {cwd: 'src/server'})
        .then('controllers')
        //.then('routes/auth.js')
        .then('routes')
        .into(app);    

    app.use(express.static('./src/client/'));
    app.use(express.static('./'));
    app.use(express.static('./tmp'));

    return app;

}





