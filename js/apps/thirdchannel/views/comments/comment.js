define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates');
    return Backbone.View.extend({
        className: 'comment',
        template: HandlebarsTemplates['thirdchannel/comment'],
        initialize: function(options) {
            this.model = options.model;
            this.model.set('mentions', options.mentions);
            this.model.set('currentUserId', options.currentUserId);
            this.model.set('highlightWords', options.highlightWords);
            this.model.collection.bind('reset', this.removeFromDom, this);
        },
        events: {
            'click .delete-comment': 'deleteComment'
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },
        deleteComment: function(e) {
            e.preventDefault();
            e.stopPropagation();
            var self = this;
            var userConfirmedDeletion = window.confirm("Are you sure you want to delete this comment?");
            if(userConfirmedDeletion){
                var deleteUrl = this.model.get('url') + '?comment_id=' + this.model.get('comment_id');
                this.model.collection.remove(this.model);
                this.model.destroy({
                    url: deleteUrl
                }).done(function() {
                    self.remove();
                });
            }
        },
        removeFromDom: function() {
            this.remove();
        }
    });
});
