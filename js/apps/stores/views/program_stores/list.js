define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ListItemView = require('stores/views/program_stores/list_item');

    var View = Backbone.View.extend({
        template: Templates['stores/program_stores/list'],
        childViews: [],
        initialize: function() {
            _.bindAll(this, 'renderProgramStores', 'renderProgramStore', 'handleFilter', 'removeChildViews');
            this.listenTo(this.collection, 'reset', this.renderProgramStores);
            this.listenTo(this.collection, 'add', this.renderProgramStore);
            this.listenTo(context, 'filter:query', this.handleFilter);
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            this.renderProgramStores();
            return this;
        },
        renderProgramStores: function() {
            this.$('#program-store-list').empty();
            this.removeChildViews();
            this.collection.each(this.renderProgramStore);
        },
        renderProgramStore: function(programStore) {
            var v = new ListItemView({model: programStore});
            this.$('#program-store-list').append(v.render().el);
            this.childViews.push(v);
        },
        handleFilter: function(filterParams) {
            var url = this.collection.url() + '?' + filterParams;
            this.collection.fetch({url: url, reset: true});
        },
        leave: function() {
            this.removeChildViews();
            this.remove();
        },
        removeChildViews: function() {
            _.each(this.childViews, function(v) {
                v.remove();
            });
            this.childViews = [];
        }
    });

    return View;
});