define(function (require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        HandlebarsHelpersExt = require('handlebarsHelpersExt'),
        context = require('context'),
        SchedulingProgressRow = {
            className: 'item',
            template: Templates['procrastination/admin/schedule_row'],
            render: function() {
                var scheduleLink = context.base_url + '/' + this.model.get('personId') + '/show/' + this.model.get('id');
                this.model.set('scheduleLink', scheduleLink);
                this.$el.html(this.template(this.model.attributes));
                return this;
            }
        };

    return Backbone.View.extend(SchedulingProgressRow);
});