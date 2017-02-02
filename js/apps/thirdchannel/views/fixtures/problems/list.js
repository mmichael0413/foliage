define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ProblemRollupView = require('thirdchannel/views/fixtures/problems/item'),

        ProblemsListView = Backbone.View.extend({
            template: '',
            initialize: function () {
                this.listenTo(this.collection, 'reset', this.render);
            },
            render: function() {

                return this;
            }
        });
    return ProblemsListView;
});