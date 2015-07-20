define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ListItemView = require('stores/views/program_list_item');

    var View = Backbone.View.extend({
        template: Templates['stores/programs/list'],
        childViews: [],
        initialize: function() {
            _.bindAll(this, 'renderProgramItem');
        },
        render: function() {
            this.$el.html(this.template());
            this.collection.each(this.renderProgramItem);
            return this;
        },
        renderProgramItem: function(program) {
            var v = new ListItemView({model: program});
            this.childViews.push(v.render());
        },
        leave: function() {
            _.each(this.childViews, function(v) {
                v.remove();
            });
            this.childViews = [];
            this.remove();
        }
    });

    return View;
});