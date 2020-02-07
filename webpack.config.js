const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    }   
}