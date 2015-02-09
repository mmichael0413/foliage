define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        _ = require('underscore'),
        Templates = require('handlebarsTemplates'),
    

        MissingTravelView = {

            el: "#entries",

            events: {
                'click .calculate-mileage': 'recalculate'
            },

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
            },

            recalculate: function (e) {
                e.stopPropagation();
                e.preventDefault();
                var $link = $(e.currentTarget),
                        url = $link.attr('href') + window.location.search,
                        data = {};
                
                if (confirm("Are you sure you wish to recalculate?")) {
                    $link.html("<i class='fa fa-spin fa-spinner'></i>");    
                    
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: data,
                    })
                    .done(function () {
                        $link.html("<p>Done!</p>");
                    });
                }
            }
        };

    return Backbone.View.extend(MissingTravelView);


});