var metadata = require('metadatajs/metadata');
var url = require('url');
var log = require('logger').log;
var EventEmitter = require('events').EventEmitter;



exports.index = function searchIndex(req, res) {
    var query = url.parse(req.url, true).query
    this.q = query ? query.q : null;
    
    var self = this;
    search(this.q, function(tracks) {
        self.tracks = tracks;
        res.template('search/index');
    });

}

function search(q, callback) {
    var tracks = [];
    
    /*
    */
    metadata.searchForTrack = function(q, callback) {
        var emitter = new EventEmitter();
        emitter.execute = function() {
            callback({
                name: 'Some track',
                artist: {
                    name: 'Some artist' 
                }
            });
            emitter.emit('done');
        };
        return emitter;
    }    
    
    metadata.
        searchForTrack(q, function(track) {
            tracks.push(track);
        }).
        addListener('done', function(res) {
           callback(tracks);
        }).
        execute();
        
}