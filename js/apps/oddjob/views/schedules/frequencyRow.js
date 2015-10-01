define(function(require) {
    var Backbone = require('backbone'),
        Pikaday = require('pikaday'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),

        FrequencyRowView = {
            className: 'frequency pure-g',

            render: function () {
                var data = this.model.toJSON();
                data.visitOptions = [];
                context.visitOptions.forEach(function (option) {
                    data.visitOptions.push({selected: option == data.monthlyVisits, key: option});
                });
                
                data.scheduleDates = context.meta.scheduleDates;
                this.$el.html(Templates['oddjob/schedule/row'](data));
                this.configureDatepicker(this.$el.find(".datepicker.begin"));
                this.configureDatepicker(this.$el.find(".datepicker.end"));
                return this;
            },

            configureDatepicker: function ($input) {
                var self = this,
                    datepicker = new Pikaday({field: $input[0],
                         position: "bottom right",
                     });
                self.$el.find('.pika-single').addClass('col-1-1');
            },
        };
    return Backbone.View.extend(FrequencyRowView); 
});