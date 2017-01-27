define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        Summary = Backbone.View.extend({
            el: '#fixtures-summary',

            template: HandlebarsTemplates["thirdchannel/fixture_tracking/summary"],

            initialize: function () {
                this.render();

                this.listenTo(this.model, 'request', this.renderLoading);
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(context, 'filter:query', this.render);
            },

            renderLoading: function() {
                this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/summary_overview_loading"]);
            },

            render: function() {
                var data = this.model.attributes;
                data.programId = context.programId;
                data.queryString = window.location.search;
                data.problemsQueryString = data.queryString;

                var problems = this.model.get('problems');
                if(problems !== undefined && problems !== null && !_.isEmpty(problems)) {
                    data.problemsQueryString = data.problemsQueryString + '&' + $.param({problems: problems});
                }

                this.$el.html(this.template(data));

                return this;
            }

        });

    return Summary;
});