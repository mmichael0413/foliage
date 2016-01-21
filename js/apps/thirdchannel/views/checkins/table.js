define(function(require) {
    var PageableListView = require('thirdchannel/views/shared/pageable_list'),
        StoreView = require('thirdchannel/views/checkins/store');

    return PageableListView.extend({
        el: ".section",
        bodySelector: '.table',

        render: function () {
            var $body = this.$el.find(this.bodySelector);

            $body.html('');
            if(window.bootstrap.pages.totalCount === 0){
                $body.append("No stores available for checkin");
            }
            _.each(window.bootstrap.job_uuids_by_date_by_store_uuid, function(job_uuids_by_date, store_uuid) {
                var storeModel = {
                    store_details: window.bootstrap.store_details_by_uuid[store_uuid],
                    job_uuids_by_date: job_uuids_by_date,
                    job_details_by_uuid: window.bootstrap.job_details_by_uuid
                };
                $body.append(new StoreView({model: storeModel}).render().el);
            });

            this.afterRender();

            return this;
        }
    });
});
