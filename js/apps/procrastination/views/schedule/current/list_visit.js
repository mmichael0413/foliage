define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        moment = require('moment');

    return Backbone.View.extend({
        className: 'item pure-g',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row'],

        initialize: function(options) {
            this.model = options.model;
            this.showCompleted = options.showCompleted;
        },

        events: {
            'click .unassign' : 'unassign',
            'click .expand' : 'expand',
            'click .collapse' : 'collapse'
        },

        render: function() {
            var dateCompleted = this.model.get('dateCompleted') ? moment(this.model.get('dateCompleted')).utc().format('MM/DD/YYYY') : null;


            var attrs = {
                city: this.model.get('city'),
                customerStoreUUID: this.model.get('customerStoreUUID'),
                dateCompleted: dateCompleted,
                dateScheduled: moment(this.model.get('dateScheduled')).utc().format('YYYY MM DD'),
                state: this.model.get('state'),
                storeName: this.model.get('storeName'),
                street: this.model.get('street'),
                jobDetail: this.model.get('jobDetail'),
                visitUUID: this.model.get('visitUUID'),
                zip: this.model.get('zip'),
                canUnassign: this.model.get('canUnassign'),
                showCompleted: this.showCompleted,
                totalDuration: this.model.get('totalDuration'),
                tasks: this.model.get('tasks'),
                hidden: 'hidden'
            };


            this.$el.html(this.template(attrs));

            return this;
        },

        unassign: function(e) {
            e.preventDefault();
            e.stopPropagation();

            if(confirm('This operation cannot be undone. Are you sure you want to remove this visit?')) {
                this.model.destroy({wait:true, data: {id: this.model.id, aggregateId: context.aggregateId}});
            }
        },

        expand: function(e) {
            e.preventDefault();
            e.stopPropagation();

            console.log(this.model);

            this.$('.additional-content').show('fast');
            $(e.target).addClass('collapse').removeClass('expand');


        },

        collapse: function(e) {
            e.preventDefault();
            e.stopPropagation();

            this.$('.additional-content').hide('fast');
            //$(e.target).removeClass('open');
            $(e.target).removeClass('collapse').addClass('expand');
        }

    });

});