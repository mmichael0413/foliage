define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        context = require('context'),

        VisitView = {
            template: templates['pennyPacker/travel/visit'],

            childViews: [],

            initialize: function() {

            },

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            },
            
            leave: function() {
                _.each(this.childViews, function(v) {
                    v.remove();
                });
                this.unbind();
                this.remove();
            }
        };

    return Backbone.View.extend(VisitView);
});