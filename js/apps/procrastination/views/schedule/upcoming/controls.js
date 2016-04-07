define(function (require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        ControlView = {
            className: 'controls',

            template: HandlebarsTemplates['procrastination/schedule/upcoming/controls'],

            initialize: function(options){
                this.collection = options.collection;
                this.showButton = context.workflowStatus == 'Unlocked';

                this.listenTo(context, 'action.button.event', this.triggerWorkflowUpdate);

                return this;
            },

            events: {
            },

            render: function(){
                this.$el.html(this.template({showButton: this.showButton}));

                return this;
            },


            triggerWorkflowUpdate: function(event) {
                $.post(context.base_url + '/schedule/unlock/' + context.aggregateId).done(function(){
                    location.reload();
                }).fail(function(){

                });
            }
        };

    return Backbone.View.extend(ControlView);

});
