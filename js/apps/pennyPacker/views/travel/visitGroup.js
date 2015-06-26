define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        context = require('context'),

        VisitGroupView = {
            template: templates['pennyPacker/travel/visitGroup'],

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            }

        };

    return Backbone.View.extend(VisitGroupView);
});