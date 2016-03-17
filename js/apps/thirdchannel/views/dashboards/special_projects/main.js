define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SpecialProjects = require('thirdchannel/collections/dashboards/special_projects'),
        ItemView = require('thirdchannel/views/dashboards/special_projects/item'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
        el: '.dashboard',
        template: HandlebarsTemplates['thirdchannel/dashboards/special_projects/main'],
        initialize: function(options) {
            this.options = options;
            this.collection = new SpecialProjects({programId: options.programId});
            this.loadingView = new LoadingView();

            this.listenTo(this.collection, 'reset', this.constructView);

            this.collection.fetch({reset: true});
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        constructView: function() {
            var $body = this.$('.special-projects');
            $body.empty();
            this.collection.each(function(specialProject) {
                var view = new ItemView({programId: this.options.programId, model: specialProject});
                $body.append(view.render().el);
                view.renderChart();
            }.bind(this));
        }
    });
});