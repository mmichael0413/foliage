define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        HandlebarsHelpersExt = require('handlebarsHelpersExt'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        $ = require('jquery'),
        moment = require('moment');

    return Backbone.View.extend({
        className: 'item pure-g',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row'],

        initialize: function(options) {
            this.model = options.model;
            this.showCompleted = options.showCompleted;
            this.isScheduleUnlocked = options.isScheduleUnlocked;
        },

        events: {
            'click .unschedule': 'unschedule',
            'click .unassign' : 'unassign',
            'click .remove' : 'remove',
            'click .expand' : 'expand',
            'click .collapse' : 'collapse',
            "click .visit-confirm-button" : "confirmVisit"
        },

        render: function() {
            var attrs = {
                address: this.model.get('address'),
                city: this.model.get('city'),
                customerStoreUUID: this.model.get('programStoreUUID'),
                dateCompleted: this.model.get('dateCompleted') || null,
                dateScheduled: this.model.get('dateScheduled'),
                state: this.model.get('state'),
                storeName: this.model.get('storeName'),
                jobDetails: this.model.get('jobDetails'),
                visitUUID: this.model.get('visitUUID'),
                zip: this.model.get('zip'),
                canUnassign: this.model.get('canUnassign'),
                canUnschedule: this.model.get('canUnschedule'),
                canConfirm: this.model.get('canConfirm'),
                isConfirmed: this.model.get('status') === 'confirmed',
                lastStatusChange: this.model.get('lastStatusChange'),
                showCompleted: this.showCompleted,
                totalDuration: this.model.get('totalDuration'),
                tasks: this.model.get('tasks'),
                taskCount: this.model.get('tasks').length,
                hidden: 'hidden'
            };

            this.$el.html(this.template(attrs));
            if (attrs.canConfirm && !attrs.dateCompleted) {
                this.$('.instructions').html(HandlebarsTemplates['procrastination/schedule/upcoming/instructions/visitConfirmation']);
            }

            return this;
        },

        unschedule: function(e) {
            e.preventDefault();
            e.stopPropagation();

            var dateScheduled = moment.utc(this.model.get('dateScheduled')).format("l");

            if(confirm("Are you sure you want to unschedule this visit to " + this.model.get('storeName') + " on " + dateScheduled)) {
                this.model.destroy({
                    wait:true,
                    data: {
                        id: this.model.id,
                        unschedule: true,
                        remove: false,
                        aggregateId: context.aggregateId
                    }
                });
            }
        },

        unassign: function(e) {
            e.preventDefault();
            e.stopPropagation();

            if(confirm('This operation cannot be undone. Are you sure you want to unassign this visit?')) {
                this.model.destroy({wait:true, data: {id: this.model.id, remove: false, aggregateId: context.aggregateId}});
            }
        },

        confirmVisit: function (e) {
            e.preventDefault();
            e.stopPropagation();
            var url = context.base_url+"/"+ this.model.get('personId')+"/show/"+this.model.get('aggregateId')+"/"+this.model.get('id')+"/confirm";
            var self = this;
            $.post(url, function (response) {
                self.model.set('isConfirmed', true);
                self.model.set('lastStatusChange', Date.now());
                self.model.set('status', 'confirmed');
            });
        },

        remove: function(e) {
            e.preventDefault();
            e.stopPropagation();

            if(confirm('This operation cannot be undone. Are you sure you want to remove this visit?')) {
                this.model.destroy({wait:true, data: {id: this.model.id, remove: true, aggregateId: context.aggregateId}});
            }
        },

        expand: function(e) {
            e.preventDefault();
            e.stopPropagation();

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
