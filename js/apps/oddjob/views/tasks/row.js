define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: "task pure-g row",

        edit: function () {
            window.location = 'tasks/' + this.model.get('id');
        },

        render: function () {
            var data = this.model.toJSON();
            data.displayExpectedPayment = data.expectedPayment / 100;
            this.$el.html(Templates['oddjob/tasks/row'](data));
            return this;
        }
    });
});