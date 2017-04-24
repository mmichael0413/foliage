define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        AssignmentHistoryModal = require('thirdchannel/views/manage/jobs/assignmentHistory');

    return Backbone.View.extend({
        el: '.job-request-details',

        events: {
            'click .display-assignment-history': 'loadModal'
        },

        initialize: function(options) {
            this.assignmentsHistory = options.assignmentsHistory;
        },

        render: function() {
            return this;
        },

        loadModal: function(e) {
            e.preventDefault();
            this.modal = new AssignmentHistoryModal({collection: this.assignmentsHistory});
            this.$el.append(this.modal.render().$el);
        }
    });
});
