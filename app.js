require.paths.unshift(__dirname + '/actions/');
require.paths.unshift(__dirname + '/vendor/');

var sys = require('sys');
var t = require('tnode/t');
var search = require('search/search');

t.app({
    debug: true,
    routes: {
        '^/(web/.*)$': t.serve,
        '^/search/?$': search.index,
        '^/search/(.*)/?$': search.search,
        '^/$': function(req, res) {
            return 'index';
        }
    }
});