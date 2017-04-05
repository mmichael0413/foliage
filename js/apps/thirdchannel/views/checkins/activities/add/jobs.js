define(function(require) {
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        JobView = require('thirdchannel/views/checkins/activities/add/job');

    return Backbone.View.extend({
        el: '.optional-activities',

        noResultsTemplate: Templates['thirdchannel/checkins/activities/no_results'],
        creatingTemplate: Templates['thirdchannel/checkins/activities/add/creating_activity'],

        initialize: function() {
            this.listenTo(context, 'list:search:update', this.noResults);
            this.listenTo(context, 'list:create:activity', this.creating);
        },

        render: function() {
            this.$activities = this.$('.activities-list');
            if (this.collection.length === 0) {
                this.$activities.empty();
                this.$activities.append(this.noResultsTemplate());
            } else {
                this.$activities.empty();
                this.collection.forEach(function (model) {
                    this.$activities.append(new JobView({model: model.job, collection: model.activities}).render().$el);
                }, this);
            }
            return this;
        },

        creating: function () {
            this.$activities.empty();
            this.$activities.append(this.creatingTemplate());
        }
    });
});
