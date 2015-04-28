define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Schedule = require('procrastination/models/schedule/main');

    return Backbone.Collection.extend({
        initialize: function(models, options){
            this.aggregateId = options.aggregateId;
            this.personId = options.personId;
            this.programId = options.programId;
        },

        model: Schedule,

        url: function(){
            return context.base_url + '/schedule/list/scheduled/' + this.aggregateId;
        }
    });
});