require.paths.unshift(__dirname + '/actions/');
require.paths.unshift(__dirname + '/vendor/');
require.paths.unshift(__dirname + '/vendor/tnode/');
require.paths.unshift(__dirname + '/vendor/tnode/lib/');

var sys = require('sys');
var t = require('t');
var search = require('search/search');

t.app({
    debug: true,
    routes: {
        '^/(web/.*)$': t.serve,
        '^/search/?$': search.index,
        '^/$': function index(req, res) {
            res.template('index');
        }
    }
});