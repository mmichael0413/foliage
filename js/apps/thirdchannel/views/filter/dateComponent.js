define(function (require) {
    var
        context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
        Pikaday = require('pikaday');

    /**
     * A variation of the standard Filter Component for handling explicit dates
     * 
     * @exports thirdchannel/views/filter/dateComponent
     */
    var DateComponent = require('thirdchannel/views/filter/component').extend({

        templateName: 'thirdchannel/filters/date_component',


        render: function () {
            var self = this;
            this.activeFilters = [];
            this.filterParam = this.model.get('name');

            this.$el.html( handlebarsTemplates[this.templateName]( this.model.toJSON() ) );

            this.datepicker = new Pikaday({field: this.$el.find("input")[0],
                         bound: false,
                         onSelect : function(){
                             context.trigger('filter:request');
                         }});

            this.listenTo(context, this.filterParam +':filter:clear', this.restoreFilter);
            return this;
        },
        addFilterHandler: function (e) {
            //shut it down!
            e.preventDefault();
            e.stopPropagation();
        },
        addFilterByValue: function (value) {
            this._addFilter(value, value);
            if (this.datepicker.getDate() === null)
            {
                var date = new Date(value);
                this.datepicker.setDate(new Date(date.getTime() + date.getTimezoneOffset()*(60000)), true);
            }
        },
        handleDateChange: function (e) {

            var value = e.currentTarget.value;
            if (value) {
                this.clear();
                this.addFilterByValue(value, value);
            }

        },
        handleDateBlur: function (e) {
            this.handleDateChange(e);
            this.toggleOpen();
            context.trigger('filter:request');
        }
    });

    return DateComponent;
});