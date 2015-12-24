/* The properties a workspace has */

// Grab the WorkspaceUser schema
var WorkspaceUser = require('./workspaceUser');

var Workspace = {
    'name': { // Name of workspace
        type: String,
        required: true
    },
    'killAfter': { // Kill workspace after x MINUTES of inactivity. Null if forever alive
        type: Number,
        required: true,
        allowNull: true
    },
    'users': { // Other users who can access the workspace
        type: Array,
        schema: { // An array of workspaceUser
            type: Object,
            schema: WorkspaceUser
        }
    }
};

module.exports = Workspace;