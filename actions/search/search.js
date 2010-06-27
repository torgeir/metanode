var metadata = require('metadatajs/metadata');

exports.index = function searchIndex(req, res) {
     return 'search/index';
}
exports.search = function searchSearch(req, res, search) {
    this.search = search;
    return 'search/search';
}