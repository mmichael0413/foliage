define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('app/utils/HandlebarsHelpers');
        
    return Backbone.View.extend({
        className: 'comment',
        template: HandlebarsTemplates.comment,
        initialize: function (options) {
            this.model = options.model;
            this.model.collection.bind('reset', this.removeFromDom, this);
        },
        events: {
            'click .delete-comment': 'deleteComment'
        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },
        deleteComment: function (e) {
            e.preventDefault();
            e.stopPropagation();

            var self = this;
            var deleteUrl = this.model.url + '?comment_id=' + this.model.get('comment_id');

            this.model.collection.remove(this.model);
            this.model.destroy({url: deleteUrl}).done(function () {
                self.remove();
            });
        },
        removeFromDom: function () {
            this.remove();
        }
    });
});