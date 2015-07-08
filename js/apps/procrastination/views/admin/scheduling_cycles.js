define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        Pageable = require('shared/views/utils/pageable_component'),
        SchedulingCycleView = require('procrastination/views/admin/scheduling_cycles_item'),

        SchedulingCyclesView = {
            el: '#scheduling-cycles',

            template: Templates['procrastination/admin/scheduling_cycles'],

            childViews: [],

            initialize: function() {
                _.bindAll(this, 'renderCollection', 'reRenderCollection');
                this.listenTo(this.collection, 'reset', this.reRenderCollection);
            },

            render: function() {
                this.$el.html(this.template());
                this.renderCollection();
                return this;
            },

            renderCollection: function() {
                var self = this,
                    $body = this.$('.body');

                this.collection.each(function(schedulingCycle) {
                    var v = new SchedulingCycleView({model: schedulingCycle});
                    self.childViews.push(v.render());
                    $body.append(v.el);
                });
            },

            reRenderCollection: function() {
                _.each(this.childViews, function(v) {
                    v.remove();
                });
                this.childViews = [];
                this.renderCollection();
            }
        };

    return Backbone.View.extend(SchedulingCyclesView);
});