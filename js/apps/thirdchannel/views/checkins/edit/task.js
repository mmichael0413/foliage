define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/edit/task'],

        events: {
            'click' : 'show'
        },

        initialize: function() {
            this.listenTo(context, 'visit:activities:edit', this.editMode);
        },

        render: function() {
            this.$el.html(this.template(this.model));
            this.$indicator = this.$('.indicator i');
            return this;
        },

        show: function(e) {
            window.location.href = this.model.submission.url;
        },

        editMode: function(e) {
            this.$indicator.removeClass('ic_start ic_checked').addClass('fa fa-trash');
        }
    });
});
