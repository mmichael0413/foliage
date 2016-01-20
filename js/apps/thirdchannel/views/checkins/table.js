define(function(require) {
    var PageableListView = require('thirdchannel/views/shared/pageable_list'),
        StoreView = require('thirdchannel/views/checkins/store');

    return PageableListView.extend({
        el: ".section",
        bodySelector: '.table',

        render: function () {
            var $body = this.$el.find(this.bodySelector);

            $body.html('');
            if(this.collection.length === 0){
                $body.append("No stores available for checkin");
            }
            this.collection.each(function(store) {
                var storeModel = {
                    store: store.attributes,
                    jobs_by_date: window.bootstrap.jobs_by_date_by_store[store.attributes.id],
                    jobs: window.bootstrap.jobs_by_uuid
                };
                $body.append(new StoreView({model: storeModel}).render().el);
            });

            this.afterRender();

            return this;
        }
    });
});
