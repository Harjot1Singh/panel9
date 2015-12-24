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
    // Fetch from DB
    log.debug('Fetching workspaces from DB for', user);
    this.db.all(queries.getWorkspaces, [user], function(err, data) {
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
    // Fetch single workspace from DB
    log.debug('Trying to get workspace', workspace);
    this.db.get(queries.getWorkspace, [workspace], function(err, data) {
        // If error, log and quit
        if (err) {
            log.error('Failed to get workspace ', workspace, ':', err);
            return callback();
        }
        log.debug('Retrieved workspace', workspace);
        callback(data);
    });
};

// Create a workspace
Manager.prototype.createWorkspace = function(workspace, callback) {
    // Insert into DB
    log.debug('Inserting workspace', workspace.name, 'into DB');
    this.db.run(queries.createWorkspace, [workspace.name, workspace.killAfter], function(err) {
        // If error, callback it
        if (err) {
            // Must already exist, so return that they must chose a new name
            if (err.code === "SQLITE_CONSTRAINT")
                return callback('Workspace with name ' + workspace.name + ' already exists');
            log.error('Failed to create workspace', workspace.name);
            // Otherwise unknown
            return callback('Internal error: ' + err.code);
        }
        // Else it was successful
        log.debug('Successfully inserted workspace', workspace.name, 'into DB');
        callback();
    });
};

// Update a workspace
Manager.prototype.updateWorkspace = function(workspace) {

};

// Deletes a workspace for a user
Manager.prototype.deleteWorkspace = function() {

};

// Adds user to workspace
Manager.prototype.addUserToWorkspace = function(user, workspace, callback) {
    // Insert into workspaceUsers table
    log.debug('Inserting', user, 'into', workspace);
    this.db.run(queries.addToWorkspace, [user.email, workspace, user.writeAccess, user.isAdmin], function(err) {
        // If error, callback it
        if (err) {
            log.error('Failed to add user', user.name, 'to workspace', workspace);
            // If violates constraint, it's because user is already part of workspace
            if (err.code === 'SQLITE_CONSTRAINT')
                return callback('User ' + user.name + ' is already part of ' + workspace);
            // Otherwise unknown error
            return callback('Internal error: ' + err.code);
        }
        log.debug('Successfully added', user, 'into', workspace);
        // Successful
        callback();
    });
};

// Deletes a user from the workspace
Manager.prototype.removeUserFromWorkspace = function(user, workspace, callback) {

};

// Updates an existing user in the workspace
Manager.prototype.updateUserInWorkspace = function(user, workspace, callback) {

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