define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        Pageable = require('shared/views/utils/pageable_component'),
        SchedulingCycleView = require('procrastination/views/admin/scheduling_cycles_item'),

        SchedulingCyclesView = Backbone.View.extend({
            el: '#scheduling-cycles',

            template: Templates['procrastination/admin/scheduling_cycles'],

            childViews: [],

            initialize: function() {
                _.bindAll(this, 'renderCollection');
                this.listenTo(this.collection, 'reset', this.renderCollection);
            },

            render: function() {
                this.$el.html(this.template());
                this.renderCollection();
                this.renderPagination();
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

            pageChange: function(page) {
                var self = this;

                _.each(this.childViews, function(v) {
                    v.remove();
                });
                this.childViews = [];

                this.collection.page = page;
                this.collection.fetch({reset: true, data: { page: page }}).done(function() {
                    self.renderPagination();
                });
            }
        });

    _.extend(SchedulingCyclesView.prototype, Pageable);

    return SchedulingCyclesView;
});