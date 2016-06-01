define(function(require) {
    var FilterableTableView = require('thirdchannel/views/shared/filterable_table'),
        AsyncCollection = require('thirdchannel/collections/shared/async'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        /**
         *
         * The Teams list
         * 
         * @extends {module:thirdchannel/views/shared/filterable_table}
         * @exports thirdchannel/views/teams/list
         */
        TeamListView = FilterableTableView.extend({
            loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
            collectionClass: AsyncCollection,
            bodySelector: '.body',
            el: '#team',
            afterRender: function () {
               $("#agentTotal").html(this.collection.length + " Agents");
            },
            template: 'thirdchannel/teams/rows'
        });
    return TeamListView;
});