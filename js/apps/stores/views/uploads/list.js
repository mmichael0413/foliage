define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ListItemView = require('stores/views/uploads/list_item');

    var View = Backbone.View.extend({
        template: Templates['stores/uploads/list'],
        childViews: [],
        initialize: function() {
            _.bindAll(this, 'renderUploads', 'renderUpload', 'removeChildViews');
            this.listenTo(this.collection, 'reset', this.renderUploads);
            this.listenTo(this.collection, 'add', this.renderUpload);
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            this.renderUploads();
            return this;
        },
        renderUploads: function() {
            this.removeChildViews();
            this.collection.each(this.renderUpload);
        },
        renderUpload: function(upload) {
            var v = new ListItemView({model: upload});
            this.$('#upload-list').append(v.render().el);
            this.childViews.push(v);
        },
        leave: function() {
            this.removeChildViews();
            this.remove();
        },
        removeChildViews: function() {
            this.$('#upload-list').empty();
            _.each(this.childViews, function(v) {
                v.remove();
            });
            this.childViews = [];
        }
    });

    return View;
});