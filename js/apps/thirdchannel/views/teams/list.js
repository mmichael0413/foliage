define(function(require) {
    var PageableListView = require('thirdchannel/views/shared/pageable_list'),
        /**
         *
         * The Teams list
         * 
         * @extends {module:thirdchannel/views/shared/pageable_list}
         * @exports thirdchannel/views/teams/list
         */
        TeamListView = PageableListView.extend({
            el: '#team',
            template: 'thirdchannel/teams/rows',
        });
    return TeamListView;
});