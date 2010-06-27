var t = require('./vendor/tnode/t');
var metadata = require('./vendor/metadata');

t.app({
    routes: {
        '^/(web/.*)$': t.serve,
        '^/$': function(req, res) {
            return 'index';
        }
    }
});