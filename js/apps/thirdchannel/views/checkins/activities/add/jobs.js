define(function(require) {
    var Backbone = require('backbone'),
        JobView = require('thirdchannel/views/checkins/activities/add/job');

    return Backbone.View.extend({
        el: '.optional-activities',

        render: function() {
            this.$activities = this.$('.activities-list');
            this.$activities.empty();

            this.collection.forEach(function(model) {
                this.$activities.append(new JobView({model: model.job, collection: model.activities}).render().$el);
            }, this);
            return this;
        }
    });
});
