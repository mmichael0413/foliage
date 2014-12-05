define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        CountModel = require('thirdchannel/models/dashboards/alerts/count'),
        AlertsCollection = require('thirdchannel/collections/dashboards/alerts/alerts'),
        GroupView = require('thirdchannel/views/dashboards/alerts/index/group'),
        AlertView = require('thirdchannel/views/dashboards/alerts/index/alert');

    return Backbone.View.extend({
        tagName: 'tbody',
        className: "alerts",
        template: HandlebarsTemplates['dashboards/alerts/index/alerts'],
        loadingTemplate: HandlebarsTemplates.loading,
        initialize: function (options) {
            this.options = options;
            this.collection = new AlertsCollection({programId: this.options.programId, id: this.options.id});
        },
        render: function () {
            var self = this;
            this.$el.html(this.loadingTemplate());
            this.collection.fetch({success: function (collection) {
                self.$el.empty();
                collection.each(function (model) {
                    if (model.get('type') == 'group') {
                        self.createAlertGroupView(model);
                    } else if (model.get('type') == 'alert') {
                        self.createAlertView(model);
                    }
                });
            }});
            return this;
        },
        createAlertGroupView: function (model) {
            var self = this;
            var groupId = model.get('id');
            this.$el.append(new GroupView({groupId: groupId, model: model}).render().$el);
            _.each(model.get('alerts'), function (subModel) {
                subModel = new CountModel(subModel);
                self.$el.append(new AlertView({programId: self.options.programId, groupId: groupId, model: subModel}).render().$el);
            });
        },
        createAlertView: function (model) {
            this.$el.append(new AlertView({programId: this.options.programId, model: model}).render().$el);
        }
    });
});


