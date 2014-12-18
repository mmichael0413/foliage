define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),

        /**
         * Represents a Checkin Row
         * 
         * @type {View}
         * @exports 'pennyPacker/views/entry/checkin'
         */
        CheckinView = {
            className: 'item checkin',

            render: function () {
                this.$el.html(Templates['pennyPacker/entry/checkin'](this.model.toJSON()));
                return this;
            }
        };

    return Backbone.View.extend(CheckinView);
});