/* Custom, pretty logger */
var log = require('custom-logger')
    .config({
        format: "[%timestamp%][%event%]:%padding%%message%"
    })
    .new({
        GET: {
            level: 1,
            event: "GET",
            color: "blue"
        },
        POST: {
            level: 1,
            event: "POST",
            color: "blue"
        },
        PUT: {
            level: 1,
            event: "PUT",
            color: "blue"
        },
        DELETE: {
            level: 1,
            event: "DELETE",
            color: "blue"
        }
    });

module.exports = log;