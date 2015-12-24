/* Manages workspace management functionality */

// Loads SQLite3, and query text
var sqlite3 = require('sqlite3').verbose();
var queries = require('./queries.js');
var mkdirp = require('mkdirp');
var log = require('./logger');

// Object that manages workspaces
var Manager = function() {
    log.debug('Checking/creating "workspaces" directory');
    // Create workspaces directory if it doesn't exist
    mkdirp.sync('workspaces');
    // Load DB
    log.info('Loading SQLite3 database');
    this.db = new sqlite3.Database('./workspaces/panel9.db');
    log.debug('Checking/creating tables');
    this.db.exec(queries.createTables);
};

/* Workspace */

// Returns an array containing workspace objects for specific user
Manager.prototype.getWorkspaces = function(user, callback) {
    var self = this;
    // Fetch from DB
    log.debug('Fetching workspaces from DB for', user);
    self.db.all(queries.getWorkspaces, [user], function(err, data) {
        // If error, log and quit
        if (err) {
            log.error('Failed to get workspaces from DB for', user, ':', err);
            callback(null);
        }
        log.debug('Retrieved workspaces from DB for', user);
        callback(data);
    });
};

// Returns workspace object given name
Manager.prototype.getWorkspace = function(workspace, callback) {
    var self = this;
    // Fetch single workspace from DB
    log.debug('Trying to get workspace', workspace);
    self.db.get(queries.getWorkspace, [workspace], function(err, data) {
        // If error, log and quit
        if (err) {
            log.error('Failed to get workspace ', workspace, ':', err);
            callback(null);
        }
        log.debug('Retrieved workspace', workspace);
        callback(data);
    });
};

// Create a workspace for user
Manager.prototype.createWorkspace = function(workspace, callback) {

};

// Update a workspace
Manager.prototype.updateWorkspace = function(workspace) {

};

// Deletes a workspace for a user
Manager.prototype.deleteWorkspace = function() {

};

/* Users */

// Returns array of user objects
Manager.prototype.getUsers = function() {

};

// Returns user info object
Manager.prototype.getUser = function(user) {

};

// Create user 
Manager.prototype.createUser = function(user) {

};

// Updates user given user
Manager.prototype.updateUser = function(user) {

};

// Delete user
Manager.prototype.deleteUser = function() {

};

module.exports = new Manager();