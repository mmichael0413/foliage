define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.programId = options.programId;
            this.storeId = options.id;
        },
        url : function () {
            return "/programs/" + this.programId + "/checkins/choose/" + this.storeId + ".json";
        }
    });
});
