var t = require('./vendor/tnode/t');
t.app({
    routes: {
        '^/(web/.*)$': t.serve,
        '^/$': function(req, res) {
            return 'index';
        }
    }
});