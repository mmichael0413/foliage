define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        _ = require('underscore'),
        Templates = require('handlebarsTemplates'),
    

        MissingTravelView = {
            el: "#entries",

            initialize: function () {
                this.collection = new (Backbone.Collection.extend({
                    comparator: "personName"
                }))();
            },

            render: function () {
                var self = this,
                    $body = self.$el.find('.body');
                $body.html("");
                this.collection.each(function(entry) {
                    $body.append(Templates['pennyPacker/travel/row'](entry.attributes));
                });
                return this;
            }
        };

    return Backbone.View.extend(MissingTravelView);
});