define(function (require) {
    require('jquery-validate');

    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '.content',

        template: templates['erudition/ftue/edit'],

        initialize: function (options) {
            this.programUUID = options.programUUID;
            this.person = context.content.person;
        },

        render: function(){
            this.$el.append(this.template({programUUID: this.programUUID, person: this.person, states: context.content.states}));

            this.beginValidation();
            return this;
        },

        beginValidation: function () {
            $('.profile-form').validate({
                errorPlacement: function (error, element) {

                }
            });
        }
    });

});