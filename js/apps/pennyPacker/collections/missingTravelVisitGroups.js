define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        VisitGroup = require('pennyPacker/models/missingTravelVisitGroup'),

        VisitGroupsCollection = Backbone.Collection.extend({
            model: VisitGroup,
            initialize: function(options) {
                this.programId = options.programId;
            },
            url: function() {
                return '/program/' + this.programId + '/travel/missing';
            }
        });

    return VisitGroupsCollection;

});