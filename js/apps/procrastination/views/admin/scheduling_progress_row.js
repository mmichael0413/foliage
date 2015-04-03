define(function (require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        SchedulingProgressRow = {
            className: 'item',
            template: 'procrastination/admin/schedule_row',
            render: function() {
                this.$el.html(Templates[this.template](this.model.attributes));
                return this;
            }
        };

    return Backbone.View.extend(SchedulingProgressRow);
});