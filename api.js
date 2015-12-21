/* Contains all API logic */
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function() {
    // Set up API router with JSON support
    var router = express.Router();
    router.use(bodyParser.json());
    
    /* Workspace Setting Routes */
    
    // GET and POST for /workspaces
    router.route('/workspaces/:user')
        .get(function(req, res) { // Returns an array of workspaces user owns
            
        })
        .post(function(req, res) { // Creates a workspace for given user
            
        });
    
    // PUT and DELETE for specific workspaces    
    router.route('/workspaces/:user/:workspace')
        .put(function(req, res) {   // Updates given workspace
            
        })
        .del(function(req, res) {   // Deletes given workspace
            
        });
    
    /* User Routes */
    
    // GET and POST for /users 
    router.route('/users')
        .get(function(req, res) { // Returns array of list of user objects 
        
            
        })
        .post(function(req, res){ // Creates new user 
        
            
        });
        
    // PUT and DELETE for specific users        
    router.route('/users/:user')
        .put(function(req, res) { // Updates a given user 
        
            
        })
        .del(function(req, res) { // Deletes a given user
        
            
        });
    
    /* Workspace-User Routes */
    
    // GET and POST for all users of a workspace
    router.route('/workspaces/:user/:workspace/users')
        .get(function(req, res) { // Returns an array of user object part of workspace 
        
            
        })
        .post(function(req, res) { // Adds given user to given workspace
            
        });
    
    // PUT and DEL for all users of a specific user's workspace
    router.route('/workspaces/:user/:workspace/users/:collaborator')
        .put(function(req, res) { // Updates rights of collaborator
            
        })
        .del(function(req, res) { // Deletes collaborator from workspace
            
        });
    
    return router;
};