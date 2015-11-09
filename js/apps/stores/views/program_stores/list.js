define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ProgramStores = require('stores/collections/program_stores'),
        ListItemView = require('stores/views/program_stores/list_item');

    var View = Backbone.View.extend({
        template: Templates['stores/program_stores/list'],
        noStoreTemplate: Templates['stores/program_stores/zero_entry_list'],
        childViews: [],
        events: {
            'keyup .search': 'search',
            'click .reset-search': 'resetSearch'
        },
        initialize: function() {
            _.bindAll(this, 'renderProgramStores', 'renderProgramStore', 'handleFilter', 'removeChildViews', 'search');
            this.listenTo(this.collection, 'reset', this.renderProgramStores);
            this.listenToOnce(this.collection, 'reset', this.setSearchCollection);
            this.listenTo(this.collection, 'add', this.renderProgramStore);
            this.listenTo(context, 'filter:query', this.handleFilter);
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            if(this.collection.length) {
                this.renderProgramStores();
            }
            return this;
        },
        renderProgramStores: function() {
            this.removeChildViews();
            if(this.collection.length > 0) {
                this.collection.each(this.renderProgramStore);
            } else {
                this.$('#program-store-list').html(this.noStoreTemplate());
            }
        },
        renderProgramStore: function(programStore) {
            var v = new ListItemView({model: programStore});
            this.$('#program-store-list').append(v.render().el);
            this.childViews.push(v);
        },
        setSearchCollection: function() {
            this.searchCollection = new ProgramStores(this.collection.models, {program: this.collection.program});
        },
        search: function(e) {
            e.preventDefault();

            if(this.searchCollection) {
                var matcher = new RegExp(e.target.value, "i");

                var results = this.searchCollection.filter(function(store) {
                    return matcher.test(store.get('fullAddress'));
                });

                this.collection.reset(results);
            }
        },
        resetSearch: function(e) {
            e.preventDefault();
            if(this.searchCollection) {
                this.$('.search').val('');
                this.collection.reset(this.searchCollection.models);
            }
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
            this.$('#program-store-list').empty();
            _.each(this.childViews, function(v) {
                v.remove();
            });
            this.childViews = [];
        }
    });

    return View;
});