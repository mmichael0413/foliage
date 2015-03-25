define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['singleNickel/survey/list_item'],
        events: {
          'click .delete': 'removeSurvey'
        },
        initialize: function() {
            _.bindAll(this, 'removeSurvey');
        },
        render: function() {
            this.$el.html(this.template({survey: this.model.toJSON()}));
            return this;
        },
        removeSurvey: function(e) {
            e.preventDefault();
            var self = this;
            var confirmation = confirm('Are you sure you want to delete this survey?');
            if(confirmation) {
                var collection = this.model.collection;
                this.model.destroy().success(function() {
                    self.remove();
                    collection.remove(self.model);
                }).fail(function() {
                   alert('Something went wrong... Contact dev team.');
                });
            }
        }
    });

    return View;
});