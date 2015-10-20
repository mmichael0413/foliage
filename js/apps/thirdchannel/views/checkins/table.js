define(function(require) {
    var PageableListView = require('thirdchannel/views/shared/pageable_list'),
        StoreView = require('thirdchannel/views/checkins/store');

    return PageableListView.extend({
        el: "#stores",

        render: function () {
            var $body = this.$el.find(this.bodySelector);

            $body.html('');
            _.each(this.collection.models, function(model) {
                $body.append(new StoreView({model: model}).render().el);
            });

           this.afterRender();
            
           return this;
        }
    });
});