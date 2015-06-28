define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        context = require('context'),
        Entries = require('pennyPacker/collections/entries'),
        EntryView = require('pennyPacker/views/travel/entry'),

        VisitView = {
            template: templates['pennyPacker/travel/visit'],

            childViews: [],

            initialize: function() {
                this.collection = new Entries(this.model.get('entries'), {parse: true});
            },

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                this.renderEntries();
                return this;
            },

            renderEntries: function() {
                var self = this,
                    $container = this.$('.entries');

                this.collection.each(function(entry) {
                    var v = new EntryView({model: entry, parentView: self});
                    $container.append(v.render().el);
                    self.childViews.push(v);
                });
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