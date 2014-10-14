define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates.dashboard_alerts_index_group,
        events: {
            "click .expander": "toggleAlertViews"
        },
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
            this.totalAlertCount = 0;
            this.listenTo(EventListener, 'alert_group_' + this.options.groupId + ':count_update', this.updateTotalAlertCount, this);
        },
        render: function () {
            var self = this;
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        },
        toggleAlertViews: function () {
            var expanderIcon = this.$el.find(".expander i");
            if (expanderIcon.hasClass("fa-caret-up")) {
                expanderIcon.removeClass("fa-caret-up").addClass("fa-caret-down");
                EventListener.trigger('alert_group_' + this.options.groupId + ':hide');
            } else if (expanderIcon.hasClass("fa-caret-down")) {
                expanderIcon.removeClass("fa-caret-down").addClass("fa-caret-up");
                EventListener.trigger('alert_group_' + this.options.groupId + ':show');
            }
        },
        updateTotalAlertCount: function (data) {
            this.totalAlertCount += data;
            this.$el.find('.alert-count').text(this.totalAlertCount);
        }
    });
});


