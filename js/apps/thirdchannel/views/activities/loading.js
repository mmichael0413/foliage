define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');
        
    return Backbone.View.extend({
        className: 'isLoading',
        template: HandlebarsTemplates['thirdchannel/loading'],
        initialize: function () {
            this.active = false;
        },
        render: function () {
            this.$el.html(this.template);
            this.active = true;
            return this;
        },
        removeFromDOM: function () {
            this.remove();
            this.active = false;
        }
    });
});