/* Contains all API logic */
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('./validator');

module.exports = function() {
    // Set up API router with JSON support
    var router = express.Router();
    router.use(bodyParser.json());
    // Manages workspaces
    var manager = require('./workspaceManager');


    /* Workspace Setting Routes */

    // GET and POST for /workspaces
    router.route('/workspaces/:user')
        .get(function(req, res) { // Returns an array of workspaces user owns
            var workspaceList = manager.getWorkspaces(req.params.user);
            // Sends workspaces as array
            if (workspaceList)
                res.json(workspaceList);
            else
                res.status(404).json({
                    'err': 'User not found'
                });
        })
        .post(validator.workspace, function(req, res) { // Creates a workspace for given user
            var result;
            // Add workspace to manager
            // Return success or err message
            if (manager.add(req.body)) {
                result = {
                    'success': 'Workspace created successfully'
                };
            }
            else {
                result = {
                    'err': 'Error creating workspace'
                };
            }
            res.json(result);
        });

    // PUT and delete for specific workspaces    
    router.route('/workspaces/:user/:workspace')
        .put(validator.workspace, function(req, res) { // Updates given workspace
            var result;
            // Update workspace via manager
            // Return success or err message
            if (manager.update(req.body)) {
                result = {
                    'success': 'Workspace update successfully'
                };
            }
            else {
                result = {
                    'err': 'Error updating workspace'
                };
            }
            res.json(result);
        })
        .delete(function(req, res) { // deleteetes given workspace

        });

    /* User Routes */

    // GET and POST for /users 
    router.route('/users')
        .get(function(req, res) { // Returns array of list of user objects 


        })
        .post(validator.user, function(req, res) { // Creates new user 


        });

    // PUT and delete for specific users        
    router.route('/users/:user')
        .put(validator.user, function(req, res) { // Updates a given user 


        })
        .delete(function(req, res) { // deleteetes a given user


        });

    /* Workspace-User Routes */

    // GET and POST for all users of a workspace
    router.route('/workspaces/:user/:workspace/users')
        .get(function(req, res) { // Returns an array of user object part of workspace 


        })
        .post(function(req, res) { // Adds given user to given workspace

        });

    // PUT and delete for all users of a specific user's workspace
    router.route('/workspaces/:user/:workspace/users/:collaborator')
        .put(function(req, res) { // Updates rights of collaborator

        })
        .delete(function(req, res) { // deleteetes collaborator from workspace

        });

    return router;
};