var jsdom = require('jsdom');
var fs = require('fs');
var virtualConsole = jsdom.createVirtualConsole();
virtualConsole.sendTo(console);

jsdom.env({
    html: fs.readFileSync('../index.html'),
    virtualConsole,
    src: [fs.readFileSync('../index.js')],
    created: function(err, window) {
        window.process = process;
        window.require = require;
        console.log('created');
    },
    done: function(err, window) {
        console.log('done');
    }
});
