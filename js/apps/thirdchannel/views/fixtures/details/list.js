define(function(require) {
    var PageableListView = require('thirdchannel/views/shared/pageable_list'),
        FixtureDetailsView = require('thirdchannel/views/fixtures/details/fixture'),
        /**
         *
         * The Fixture Details List
         * 
         * @extends {module:thirdchannel/views/shared/pageable_list}
         * @exports thirdchannel/views/stores/list
         */
        FixtureListView = PageableListView.extend({
            el: '#fixtureList',
            template: FixtureDetailsView,
            renderEmptyResult: function ($container) {
                $container.html("<section class='section'><p>No Fixtures match your filter selections.</p></section>");
            },
        });
    return FixtureListView;
});