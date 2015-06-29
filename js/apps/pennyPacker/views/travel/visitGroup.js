define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        context = require('context'),
        VisitView = require('pennyPacker/views/travel/visit'),

        VisitGroupView = {
            className: 'visit-group',

            template: templates['pennyPacker/travel/visitGroup'],

            childViews: [],

            initialize: function() {
                this.collection = new Backbone.Collection(this.model.get('visits'), {comparator: 'personName'});
            },

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                this.renderVisits();
                return this;
            },

            renderVisits: function() {
                var self = this,
                    $container = this.$('.visits');

                this.collection.each(function(visit) {
                    var v = new VisitView({model: visit});
                    $container.append(v.render().el);
                    self.childViews.push(v);
                });
            },

            leave: function() {
                _.each(this.childViews, function(v) {
                    v.leave();
                });
                this.unbind();
                this.remove();
            }

        };

    return Backbone.View.extend(VisitGroupView);
});