define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),

        SchedulingCyclesItemView = {
            className: 'scheduling-cycle pure-g',

            template: Templates['procrastination/admin/scheduling_cycles_item'],

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            }
        };

    return Backbone.View.extend(SchedulingCyclesItemView);
});