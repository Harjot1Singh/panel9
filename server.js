/* Main file for panel9 */
// Force working directory to be in same place as this file
process.chdir(__dirname);

// Set up logger
var log = require('./logger');

/* Load Config - config returns nconf */
var config = require('./configLoader');
var port = config.get('port');
// Set logger level
var logLevel = config.get('logLevel');
log.config({
    level: logLevel
});

/* Express/HTTP server */
var express = require('express');
var app = express();

// If debug, log every HTTP request
if (logLevel === 0)
    app.use(function(req, res) {
        // Assuming logger has log.GET etc
        log[req.method](req.url);
    });

// Forward /api requests to the api router
var api = require('./api')();
app.use('/api', api);

//TODO Check auth by checking whether user's directory name matches logged in name on top, so trying other users URLs won't work
//TODO Set up seperate passport auth file for strategies

// Attach public to '/''
app.use(express.static('public'));

// Launch server
var server = app.listen(port, function() {
    log.info('Panel9 started on', port);
});
