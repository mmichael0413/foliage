define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        PersonnelCollection = Backbone.Collection.extend({
            url: function () {
                return context.personnel.links.self;
            }
        }),

        /**
         * Store Personnel View. Wraps a bare-bones table that should already exist on the page, with id '#personnel'
         * 
         * @exports app/views/store_profile_personnel
         */
        StorePersonnelSectionView = {
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
                        self.$el.find('.body').html(templates['store_profile/personnel_rows'](data));
                    })
                    .fail(function () {
                        self.$el.find('.body').html("<p>There was an error fetching the Store Personnel. Please contact TechSupport</p>");
                    });
            }
        };

        return Backbone.View.extend(StorePersonnelSectionView);
        
});