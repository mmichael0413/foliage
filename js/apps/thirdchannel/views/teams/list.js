define(function(require) {
    var PageableListView = require('app/views/shared/pageable_list'),
        /**
         *
         * The Teams list
         * 
         * @extends {module:app/views/shared/pageable_list}
         * @exports app/views/teams/list
         */
        TeamListView = PageableListView.extend({
            el: '#team',
            template: 'teams/rows',
        });
    return TeamListView;
});