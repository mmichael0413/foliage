define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        el: '.dashboard',
        template: HandlebarsTemplates['dashboards/alerts/index/alert'],
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
            this.listenTo(context, 'filter:query', this.applyFilter);
        },
        render: function () {
            var self = this;
            this.setElement(this.template(this.model.toJSON()));
            this.model.fetch({ success: function (model) {
                self.$el.find(".alert-count").empty().text(model.get('count'));
                context.trigger('alert_group_' + self.options.groupId + ':count_update', model.get('count'));
            }});
            this.setGroupEvent();
            return this;
        },
        showView: function () {
            this.$el.removeClass('hide');
        },
        hideView: function () {
            this.$el.addClass('hide');
        },
        setGroupEvent: function () {
            if (this.options.groupId !== undefined) {
                this.listenTo(context, 'alert_group_' + this.options.groupId + ':show', this.showView, this);
                this.listenTo(context, 'alert_group_' + this.options.groupId + ':hide', this.hideView, this);
            }
        },
        applyFilter: function (qs) {
            var self = this;
            this.model.queryString = qs;
            this.model.fetch({ success: function (model) {
                self.$el.find(".alert-count").empty().text(model.get('count'));
                context.trigger('alert_group_' + self.options.groupId + ':count_reset', model.get('count'));
            }});

        }
    });
});


