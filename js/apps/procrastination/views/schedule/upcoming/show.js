define(function (require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates');

    ScheduleView = Backbone.View.extend({
        className: 'store-schedule',
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit'],
        initialize: function (options) {
            // model is passed in by list view
            this.model = options.model;

            this.listenTo(this.model, 'change', this.render);

        },
        events: {
            "change input": "updateScheduledDate"
        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));

            this.$el.data('event', {
                id: this.model.get('id'),
                title: this.model.get('storeName'),
                color: '#336699'
            });

            this.$el.draggable({
                helper: "clone",
                revert: true,
                revertDuration: 0,
                start: function (event, object) {
                    $(event.target).addClass('drag-active');
                },
                stop: function(event, object) {
                    $(event.target).removeClass('drag-active');
                }
            });
            return this;
        },
        updateScheduledDate: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.model.set('dateScheduled', $(e.target).val());

            if (this.model.get('dateScheduled') !== undefined) {
                if (this.model.hasChanged('dateScheduled')) {
                    this.model.save(this.model.attributes);
                }
            }
        }
    });

    return ScheduleView;
});