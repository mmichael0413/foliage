define(function (require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),
        SchedulingProgressRow = {
            className: 'item',
            template: 'procrastination/admin/schedule_row',
            render: function() {
                var scheduleLink = context.base_url + '/schedule/' + this.model.get('personId') + '/create';
                this.model.set('scheduleLink', scheduleLink);
                this.$el.html(Templates[this.template](this.model.attributes));
                return this;
            }
        };

    return Backbone.View.extend(SchedulingProgressRow);
});