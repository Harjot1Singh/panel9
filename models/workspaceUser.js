/* The properties a user requires relating to a workspace */ 

var WorkspaceUser = {
    'email' : {
        type: String,
        required: true
    },
    'name' : {
        type: String,
        required: true
    },
    'workspace' : {
        type : String,
        required: true
    },
    'writeAccess' : {
        type: Number,
        required: true
    },
    'isAdmin' : {
        type: Number,
        required: true
    }
};

module.exports = WorkspaceUser;