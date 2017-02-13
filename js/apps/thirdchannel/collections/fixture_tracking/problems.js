define(function(require){
    var PagedCollection = require('thirdchannel/collections/shared/async_paged');

    return PagedCollection.extend({
        initialize: function(models, options) {
            this.programId = options.programId;
        },
        url: function () {
            return '/programs/' + this.programId + '/fixture_tracking/problems' + '.json?' + this.queryString;
        }
    });
});