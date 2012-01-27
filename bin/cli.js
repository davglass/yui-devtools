#!/usr/bin/env node

var Stream = require('stream');
var npm = require('npm'),
    config = {
        global: true,
        exit: false,
        loglevel: 'silent',
        logfd: new Stream(),
        outfd: new Stream()
    };

console.log('You have the following YUI dev tools installed:');

var apps = {
    'yuidocjs': 1,
    'selleck': 1,
    'yui-coverage': 1,
    'yui-local': 1,
    'yuitest': 1,
    'yui-repl': 1
};

npm.load(config, function() {
    npm.commands.ls(['-g'], function(err, data) {
        Object.keys(data.dependencies).forEach(function(mod) {
            if (apps[mod]) {
                console.log('   ' + mod + '@' + data.dependencies[mod].version);
            }
        });
    });
});

