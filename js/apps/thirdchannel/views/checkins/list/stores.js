define(function(require) {
    var Templates = require('handlebarsTemplates'),
        PageableListView = require('thirdchannel/views/shared/pageable_list'),
        StoreView = require('thirdchannel/views/checkins/list/store');

    return PageableListView.extend({
        el: ".stores",
        bodySelector: '.list',
        template: Templates['thirdchannel/checkins/list/stores'],
        emptyTemplate: Templates['thirdchannel/checkins/list/no_stores'],
        loadingHTML: Templates['thirdchannel/loading'],

        render: function () {
            this.$el.empty();
            if (this.collection.queryString) {
                if(this.collection.length === 0) {
                    this.$el.append(this.emptyTemplate());
                } else {
                    this.$el.append(this.template());
                    this.$body = this.$(this.bodySelector);
                    this.collection.forEach(function(store) {
                        this.$body.append(new StoreView({model: store}).render().el);
                    }, this);
                }
            }
            this.afterRender();
            return this;
        }
    });
});
