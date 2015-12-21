/* Loads config and contains default config, using nconf */
var log = require('./logger');
var nconf = require('nconf');

try {
    log.info('Loading configuration');
    // Priority load from env -> args -> file, where file is least important
    nconf.env().argv().file('config.json');
} 
catch (error) {
    // Poor json file, exit
    log.error('config.json does not exist, or is malformed. Please check your config.json file');
    process.exit(1);
}
// Set up defaults - here to know what config.json should include
nconf.defaults({
    "port": 8080,
    "auth": {
        "local": {
            "enabled": true,
            "username": "user",
            "password": "pass"
        },
        "github": {
            "enabled": false,
            "clientID": "",
            "clientSecret": ""
        },
        "facebook" : {
            "enabled" : false
        },
        "googleplus" : {
            "enabled" : false
        }
    }
});

// Export nconf object
module.exports = nconf;