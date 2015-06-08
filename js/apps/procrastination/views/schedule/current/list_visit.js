define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'sub-section',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row'],

        events: {
            'click .unassign' : 'unassign'
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        unassign: function(e) {
            e.preventDefault();
            e.stopPropagation();

            if(confirm('This operation cannot be undone. Are you sure you want to remove this visit?')) {
                this.model.destroy({wait:true, data: {id: this.model.id, aggregateId: context.aggregateId}});
            }
        }

    });

});