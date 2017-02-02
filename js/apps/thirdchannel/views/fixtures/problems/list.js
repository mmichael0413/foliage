define(function(require) {
    var _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        PageableList = require('thirdchannel/views/shared/pageable_list'),
        ProblemView = require('thirdchannel/views/fixtures/problems/item'),

        ProblemsListView = PageableList.extend({
            el: '#fixtures-problems',

            template: HandlebarsTemplates['thirdchannel/fixtures/problems_list'],

            initialize: function () {
                this.listenTo(this.collection, 'reset', this.render);
                this.listenTo(this.collection, 'add', this.render);
                this.listenTo(context, 'filter:query', this.applyFilter);
                this.rowViews = [];
                this.render();
                return this;
            },

            render: function () {
                this.$el.html(this.template({}));

                var $body = this.$('.body');

                $body.html('');

                this.collection.each(function(problem) {
                    var view = new ProblemView({model: problem});
                    $body.append(view.render().el);
                    this.rowViews.push(view);
                }.bind(this));

                this.afterRender();

                return this;
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
    return ProblemsListView;
});