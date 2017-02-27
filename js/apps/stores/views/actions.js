define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        el: '.actions',
        template: Templates['stores/action'],
        initialize: function(){
            this.listenTo(context, 'filter:query', this.render);
        },
        render: function(qs) {
            var self = this;
            this.$el.empty();
            this.collection.each(function(action) {
                action.attributes.qs = qs;
                self.$el.append(self.template(action.attributes));
            });
            return this;
        }
    });

    return View;
});
