/* The properties a user requires */ 

var User = {
    'name' : { // (Full) Name of user
        type: String,
        required: true
    },
    'email' : {
        type: String,
        required: true
    }
};

module.exports = User;