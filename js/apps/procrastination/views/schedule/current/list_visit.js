define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'sub-section',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row'],
        initialize: function(options) {
            this.model = options.model;
        },

        events: {
            'click .unassign' : 'unassign'
        },

        render: function() {
            var attrs = {
                city: this.model.get('city'),
                customerStoreUUID: this.model.get('customerStoreUUID'),
                dateCompleted: this.model.get('dateCompleted'),
                dateScheduled: this.model.get('dateScheduled'),
                state: this.model.get('state'),
                storeName: this.model.get('storeName'),
                street: this.model.get('street'),
                taskDetail: this.model.get('taskDetail'),
                visitUUID: this.model.get('visitUUID'),
                zip: this.model.get('zip')
            };


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