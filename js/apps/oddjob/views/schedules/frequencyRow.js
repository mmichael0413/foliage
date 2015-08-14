define(function(require) {
    var Backbone = require('backbone'),
        Pikaday = require('pikaday'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),

        FrequencyRowView = {
            className: 'frequency',

            render: function () {
                var data = this.model.toJSON();
                data.visitOptions = [];
                //data.visitOptions = context.visitOptions;
                context.visitOptions.forEach(function (option) {
                    data.visitOptions.push({selected: option == data.monthlyVisits, key: option});
                });
                
                
                this.$el.html(Templates['oddjob/frequencies/row'](data));
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