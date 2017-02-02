define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        FilterableComponent = require('shared/views/utils/filterable_component'),
        ProblemItemView = require('thirdchannel/views/fixtures/problems/item'),

        Summary = Backbone.View.extend({
            el: '#fixtures-problems',

            loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
            template: HandlebarsTemplates["thirdchannel/fixtures/problems_summary"],

            initialize: function() {
                this.listenTo(context, 'filter:query', this.applyFilter);
                this.listenTo(this.collection, 'reset', this.renderCollection);
                this.listenTo(this.collection, 'request', this.renderLoading);

                this.render();
                this.applyFilter();
            },

            render: function() {
                this.$el.html(this.template({}));
                this.renderLoading();
                return this;
            },

            renderLoading: function() {
                this.$('.body').html(this.loadingHTML);
            },

            renderCollection: function() {
                var $body = this.$('.body');
                $body.html('');
                if(this.collection.length > 0) {
                    this.collection.each(function(problem) {
                        $body.append(new ProblemItemView({model: problem}).render().el);
                    });
                } else {
                    $body.html('No issues to display');
                }
            },

            applyFilter: function() {
                var search = window.location.search;
                if(search.length > 0) {
                    search = search.substring(1, search.length);
                }
                this.$('.body').html(this.loadingHTML);
                this.collection.setQueryString(search);
                this.collection.fetch({reset: true});
            }
        });

    return Summary;
});