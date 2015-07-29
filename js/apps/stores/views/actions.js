define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        el: '.actions',
        template: Templates['stores/action'],
        render: function() {
            var self = this;
            this.collection.each(function(action) {
                self.$el.append(self.template(action.attributes));
            });
            return this;
        }
    });

    return View;
});