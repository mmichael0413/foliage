define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SpecialProjectsModel = require('thirdchannel/models/dashboards/special_projects'),
        ItemView = require('thirdchannel/views/dashboards/special_projects/item'),
        Filter = require('thirdchannel/views/filter/main'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
        el: '.dashboard',
        tagName: 'section',
        className: 'section data-section',
        template: HandlebarsTemplates['thirdchannel/dashboards/special_projects/main'],
        initialize: function(options) {
            this.options = options;
            this.model = new SpecialProjectsModel({programId: options.programId, id: options.id, queryString: window.bootstrap});
            this.loadingView = new LoadingView();
        },
        render: function() {
            var self = this;

            this.$el.html(this.template({}));

            this.$('.body').html(this.loadingView.render().el);

            this.model.fetch({data: { page: this.options.page }, processData: true, success: function(specialProjectsModel) {
                self.loadingView.remove();

                var collection = new Backbone.Collection(specialProjectsModel.get('special_projects'));

                collection.each(function(model) {
                    self.$('.body').append(new ItemView({programId: self.options.programId, model: model}).render().el);
                });
            }});

            return this;
        }
    });
});