define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['dashboards/alerts/index/group'],
        events: {
            "click .expander": "toggleAlertViews"
        },
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
            this.totalAlertCount = 0;
            this.listenTo(context, 'alert_group_' + this.options.groupId + ':count_update', this.updateTotalAlertCount, this);
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
                context.trigger('alert_group_' + this.options.groupId + ':hide');
            } else if (expanderIcon.hasClass("fa-caret-down")) {
                expanderIcon.removeClass("fa-caret-down").addClass("fa-caret-up");
                context.trigger('alert_group_' + this.options.groupId + ':show');
            }
        },
        updateTotalAlertCount: function (data) {
            this.totalAlertCount += data;
            this.$el.find('.alert-count').text(this.totalAlertCount);
        }
    });
});


