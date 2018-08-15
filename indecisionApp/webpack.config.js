const path = require('path');

//expose an object to another file
module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};