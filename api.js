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
            manager.getWorkspaces(req.params.user, function(workspaceList) {
                // Sends workspaces as array
                if (workspaceList)
                    res.json(workspaceList);
                else
                    res.status(500).json({
                        'err': 'Internal server error'
                    });
            });
        })
        .post(validator.workspace, function(req, res) { // Creates a workspace for given user
            // Add workspace to manager
            manager.createWorkspace(req.body, function(err) {
                var result;
                // Return success or err message
                if (err)
                    result = {
                        'err': err
                    };
                else
                    result = {
                        'success': 'Workspace created successfully'
                    };
                res.json(result);
            });
        });

    // PUT and delete for specific workspaces    
    router.route('/workspace/:workspace')
        .get(function(req, res) { // Returns an array of user object part of workspace 
            manager.getWorkspace(req.params.workspace, function(workspace) {
                if (workspace)
                    res.json(workspace);
                else
                    res.status(404).json({
                        'err': 'Workspace ' + req.params.workspace + ' not found'
                    });
            });

        })
        .post(function(req, res) { // Adds given user to given workspace

        })
        .put(validator.workspace, function(req, res) { // Updates given workspace
            var result;
            // Update workspace via manager
            // Return success or err message
            if (manager.updateWorkspace(req.body))
                result = {
                    'success': 'Workspace update successfully'
                };
            else
                result = {
                    'err': 'Error updating workspace'
                };
            res.json(result);
        })
        .delete(function(req, res) { // deleteetes given workspace

        });

    // PUT and delete for all users of a specific user's workspace
    router.route('/workspace/:workspace/users/:collaborator')
        .put(function(req, res) { // Updates rights of collaborator

        })
        .delete(function(req, res) { // deletes collaborator from workspace

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


    return router;
};