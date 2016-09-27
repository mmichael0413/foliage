define(function(require) {
    var Backbone = require('backbone'),
        Chosen = require('chosen'),
        DateTimePicker = require('dateTimePicker');

    var dtPickerOptions = {
        timepicker: false,
        format: 'Y-m-d',
        closeOnDateSelect: true,
        scrollInput: false
    };

    return Backbone.View.extend({
        el: '.profile-admin',
        render: function() {
            this.$('select').chosen({disable_search: true, width: "100%"});
            this.$('.datetime').datetimepicker(dtPickerOptions);
            return this;
        }
    });
});