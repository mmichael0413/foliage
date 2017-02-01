define(function(require) {
    var context = require('context'),
        PageableListView = require('thirdchannel/views/shared/pageable_list'),
        ProblemSummaryView = require('thirdchannel/views/fixtures/problems/item'),

        ProblemsListView = PageableListView.extend({
            template: ProblemSummaryView,
            initialize: function () {
                this.listenTo(this.collection, 'reset', this.render);
                this.listenTo(this.collection, 'add', this.render);
                this.listenTo(context, 'filter:query', this.applyFilter);
                this.rowViews = [];
            },
            renderEmptyResult: function ($container) {
                $container.html("<section class='section'><p>No problems match your filter selections.</p></section>");
            },
        });
    return ProblemsListView;
});