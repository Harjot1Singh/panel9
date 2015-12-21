// Force working directory to be in same place as this file
process.chdir(__dirname);

// Set up logger
var log = require('./logger');

/* Load Config - config returns nconf */
var config = require('./configLoader');
var port = config.get('port');
// Set logger level
log.config({
    level: config.get('logLevel')
});

/* Express/HTTP server */
var express = require('express');
var app = express();

// Launch server
var server = app.listen(port, function() {
    log.info('Panel9 started on', port); 
});
