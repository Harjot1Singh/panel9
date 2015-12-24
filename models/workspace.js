/* The properties a workspace has */

// Grab the User schema
var User = require('./user');

var Workspace = {
    'name': { // Name of workspace
        type: String,
        required: true
    },
    'killAfter' : { // Kill workspace after x MINUTES of inactivity. Null if forever alive
        type: Number,
        required: true,
        allowNull: true
    },
    'collaborators' : { // Permissions for collaborators - not used yet
        type: Array,
        required: false,
        schema: User
    }
};

module.exports = Workspace;