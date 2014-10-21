define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        PersonnelCollection = Backbone.Collection.extend({
            url: function () {
                return context.personnel.urls.personnel_url;
            }
        }),

        /**
         * Store Personnel View. Wraps a bare-bones table that should already exist on the page, with id '#personnel'
         * 
         * @exports app/views/store_profile_personnel
         */
        StorePersonnelView = {
            el: "#personnel",

            initialize: function () {
                this.personnel = new PersonnelCollection();
            },

            render: function () {
                var self = this;
                self.personnel.fetch()
                    .done(function (rows) {
                        //self.$el.find('tbody').html("<tr><td>Test</td></tr>");
                        var data = {rows: rows};
                        self.$el.find('tbody').html(templates['store_profile/personnel_rows'](data));
                    })
                    .fail(function () {
                        self.$el.find('tobdy').html("<tr><td>There was an error fetching the Store Personnel. Please contact TechSupport</td></tr>");
                    });
            }
        };

        return Backbone.View.extend(StorePersonnelView);
        
});