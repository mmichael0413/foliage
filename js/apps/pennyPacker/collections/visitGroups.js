define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        VisitGroup = require('pennyPacker/models/visitGroup'),

        VisitGroupsCollection = Backbone.Collection.extend({
            model: VisitGroup,
            initialize: function(options) {
                this.programId = options.programId;
            },
            url: function() {
                return '/program/' + this.programId + '/travel/missingTravel';
            }
        });

    return VisitGroupsCollection;

});