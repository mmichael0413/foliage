define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    return Backbone.Model.extend({
        initialize: function (attributes, options) {
            this.programId = options.programId;
        },
        url: function () {
            return '/programs/' + this.programId + '/activities/' + this.id + '/like';
        }
    });

});