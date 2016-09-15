define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chosen = require('chosen'),
        DateTimePicker = require('dateTimePicker');

    var dtPickerOptions = {
        timepicker: false,
        format: 'Y-m-d',
        closeOnDateSelect: true,
        scrollInput: false
    };

    return Backbone.View.extend({
        template: HandlebarsTemplates['singleNickel/survey/show'],
        events: {
            'click .export': 'toggleExport'
        },
        render: function() {
            this.$el.html(this.template(this.model));
            this.$('select').chosen({disable_search: true, width: "100%"});
            this.$('.datetime').datetimepicker(dtPickerOptions);
            this.$el.find(".survey-show-container").hide();
            return this;
        },
        toggleExport: function(e) {
            e.preventDefault();
            var container = this.$el.find(".export-container");

            if (container.hasClass('visible')) {
                container.hide('fast', "linear");
                container.removeClass('visible');
                $(e.currentTarget).removeClass('survey-toggle-on');
            }
            else {
                container.addClass('visible');
                $(e.currentTarget).addClass('survey-toggle-on');
                container.show('fast', "linear");
            }
        }
    });
});