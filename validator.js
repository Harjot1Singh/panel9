/* Provides all express middleware for validating */
var isValid = require('isvalid');
// Load schemas
var User = require('./models/user');
var Workspace = require('./models/workspace');

// Overwrite validate to return user-friendly error message
var validate = function(schema, req, res, next) {
    isValid(req.body, schema, function(err, data) {
        // If it doesnn't validate, return error
        if (err)
            return res.json(err);
        // Pass to next middleware if there was no issue
        next();
    });
};

// Wrapper that contains all express validation functions for this project
var Validator = function() {};

// Validates a single workspace
Validator.workspace = function(req, res, next) {
    validate(Workspace, req, res, next);
};

// Validates a single user
Validator.user = function(req, res, next) {
    validate(User, req, res, next);
};



module.exports = Validator;