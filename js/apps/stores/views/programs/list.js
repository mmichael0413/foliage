define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ListItemView = require('stores/views/programs/list_item');

    var View = Backbone.View.extend({
        template: Templates['stores/programs/list'],
        childViews: [],
        events: {
            'keyup .search': 'filterPrograms',
            'click .reset-search': 'resetFilter'
        },
        initialize: function() {
            _.bindAll(this, 'renderPrograms', 'renderProgramItem');
            this.searchCollection = new Backbone.Collection(this.collection.models);
            this.listenTo(this.collection, 'reset', this.renderPrograms);
        },
        render: function() {
            this.$el.html(this.template());
            this.renderPrograms();
            return this;
        },
        renderPrograms: function() {
            this.$('#program-list').empty();
            this.collection.each(this.renderProgramItem);
        },
        renderProgramItem: function(program) {
            var v = new ListItemView({model: program});
            this.$('#program-list').append(v.render().el);
            this.childViews.push(v);
        },
        filterPrograms: function(e) {
            e.preventDefault();
            var matcher = new RegExp(e.target.value, "i");

            var results = this.searchCollection.filter(function(item) {
                return matcher.test(item.get('name'));
            });

            this.collection.reset(results);
        },
        resetFilter: function(e) {
            if(e) {
                e.preventDefault();
            }
            this.$('.search').val('');
            this.collection.reset(this.searchCollection.models);
        },
        leave: function() {
            this.resetFilter();
            _.each(this.childViews, function(v) {
                v.remove();
            });
            this.childViews = [];
            this.remove();
        }
    });

    return View;
});