define(function(require) {
    var FilterableTableView = require('thirdchannel/views/shared/filterable_table'),
       // HandleBarsTemplates = require('handlebarsTemplates'),
        Members = require('thirdchannel/collections/checkins/checkin_stores'),
        Store = require('thirdchannel/views/checkins/store');

    return FilterableTableView.extend({
        el: ".section",
        bodySelector: '.table',
        collectionClass: Members,
       // template: HandleBarsTemplates['thirdchannel/checkins/stores'],

        render: function () {
            var $body = this.$el.find(this.bodySelector);
            $body.html('');
            _.each(this.collection.models, function(model){
                $body.append(new Store({model: model}).render().el);
            });

           // this.afterRender();
            return this;
        },



    });
});