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
    this.db.run(queries.createTables);
    // Holds a list of users and their workspaces
    this.workspaces = {};
};

/* Workspace */

// Returns an array containing workspace objects for specific user
Manager.prototype.getWorkspaces = function(user) {

};

// Returns workspace object
Manager.prototype.getWorkspace = function(workspace) {

};

// Create a workspace for user
Manager.prototype.createWorkspace = function(workspace) {

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