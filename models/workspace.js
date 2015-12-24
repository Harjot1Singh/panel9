/* The properties a workspace has */

// Grab the User schema
var User = require('./user');

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
    'creator': { // The admin/creator of workspace's email address
        type: String,
        required: true
    },
    'collaborators': { // Other users who can access the workspace
        type: Array,
        schema: { // An array 
            type: Object,
            schema: { // Of objects
                user: { // The actual user object
                    type: User,
                    required: true
                },
                writeAccess : { // Whether user can edit workspace or not
                    type: Boolean,
                    required: true
                }
            }
        }
    }
};

module.exports = Workspace;