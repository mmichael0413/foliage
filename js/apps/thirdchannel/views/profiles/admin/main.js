define(function(require) {
    var Backbone = require('backbone'),
        Chosen = require('chosen'),
        DateTimePicker = require('dateTimePicker');

    return Backbone.View.extend({
        el: '.profile-admin',
        render: function() {
            this.$('select').chosen({disable_search: true, width: "100%"});
            this.$('.datetime').datetimepicker({
                timepicker:false,
                format:'Y-m-d'
            });
            return this;
        }
    });
});