define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),

        SchedulingCyclesItemView = {
            className: 'scheduling-cycle pure-g',

            template: Templates['procrastination/admin/scheduling_cycles_item'],

            render: function() {
                var data = this.model.attributes;

                data.links.self = context.base_url + data.links.self;

                this.$el.html(this.template(data));
                return this;
            }
        };

    return Backbone.View.extend(SchedulingCyclesItemView);
});