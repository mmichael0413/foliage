define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ListItemView = require('stores/views/program_stores/list_item');

    var View = Backbone.View.extend({
        template: Templates['stores/program_stores/list'],
        childViews: [],
        initialize: function() {
            _.bindAll(this, 'renderProgramStores', 'renderProgramStore');
            this.listenTo(this.collection, 'reset', this.renderProgramStores);
            this.listenTo(this.collection, 'add', this.renderProgramStore)
        },
        render: function() {
            this.$el.html(this.template());
            this.renderProgramStores();
            return this;
        },
        renderProgramStores: function() {
            this.collection.each(this.renderProgramStore);
        },
        renderProgramStore: function(programStore) {
            var v = new ListItemView({model: programStore});
            this.$('#program-store-list').append(v.render().el);
            this.childViews.push(v);
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