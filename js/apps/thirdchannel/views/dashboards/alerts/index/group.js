define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['thirdchannel/dashboards/alerts/index/group'],
        events: {
            "click .expand-indicator": "toggleAlertViews"
        },
        initialize: function (options) {
            this.filteredCount = 0;
            this.options = options;
            this.model = options.model;
            this.totalAlertCount = 0;
            this.listenTo(context, 'alert_group_' + this.options.groupId + ':count_update', this.updateTotalAlertCount, this);
            this.listenTo(context, 'alert_group_' + this.options.groupId + ':count_reset', this.resetTotalAlertCount, this);
            this.listenTo(context, 'filter:query', this.resetCounter);
        },
        render: function () {
            var self = this;
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        },
        toggleAlertViews: function () {
            var expanderIcon = this.$el.find(".expand-indicator");
            if (expanderIcon.hasClass("open")) {
                context.trigger('alert_group_' + this.options.groupId + ':hide');
            } else {
                context.trigger('alert_group_' + this.options.groupId + ':show');
            }
            expanderIcon.toggleClass('open');
        },
        resetCounter: function(){
            this.filteredCount = 0;
        },
        resetTotalAlertCount: function (data) {
            this.filteredCount += data;
            this.$el.find('.alert-count').text(this.filteredCount);
        },
        updateTotalAlertCount: function (data) {
            this.totalAlertCount += data;
            this.$el.find('.alert-count').text(this.totalAlertCount.toLocaleString());
        }
    });
});


