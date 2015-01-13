define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SectionsCollection = require('thirdchannel/collections/dashboards/special_projects/sections'),
        SectionView = require('thirdchannel/views/dashboards/special_projects/section'),
        Filter = require('thirdchannel/views/filter/main'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
        tagName: 'section',
        className: 'section data-section',
        template: HandlebarsTemplates['thirdchannel/dashboards/special_projects/main'],
        initialize: function(options) {
            this.options = options;
            this.collection = new SectionsCollection({programId: options.programId});
            this.loadingView = new LoadingView();
        },
        render: function() {
            var self = this;

            this.$el.html(this.template({}));

            this.$('.body').html(this.loadingView.render().el);

            this.collection.fetch({success: function(collection) {
                self.loadingView.remove();
                collection.each(function(model) {
                    self.$('.body').append(new SectionView({programId: self.options.programId, model: model}).render().el);
                });
            }});

            return this;
        }
    });
});