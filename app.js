var t = require('./vendor/tnode/t');
t.app({
   routes: {
       '^/$': function(req, res) {
           return 'index';
       }
   } 
});