const
    gradient = require('gradient-string');

module.exports = {
    log: (message) => {
        console.log(gradient.pastel(message));
    },
    warn: (message) => {
        console.warn("Warning : " + gradient.cristal(message));
    },
    error: (message) => {
        console.error("Error : " + gradient.fruit(message));
    },
    debuging: (message) => {
        console.log("Debug : " + gradient.mind(message));
    },
    success: (message) => {
        console.log("Success : " + gradient.summer(message));
    }
}
