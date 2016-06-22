define(function (require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        Component = require('thirdchannel/views/filter/component');

    /**
     * A variation of the standard Filter Component for handling explicit dates
     *
     * @exports thirdchannel/views/filter/dateComponent
     */
    var FilterableComponent = Component.extend({
        templateName: 'thirdchannel/filters/filterable_component',

        itemsTemplate: templates['thirdchannel/filters/filterable_component_items'],

        initialize: function() {
            this._filterItems = _.debounce(_.bind(this.filterItems, this), 250);
            FilterableComponent.__super__.initialize.apply(this, arguments);
        },

        handleFilterItems: function(e) {
            e.preventDefault();
            this._filterItems();
        },

        filterItems: function() {
            var term = this.$('.items-filter').val().trim();

            this.$('.filter-list-item:not(.filtered)').show();

            if(term && term !== '') {
                var termPattern = new RegExp(term, 'i');

                // The active items are just hidden and there's no correlation except for the data-value attribute...
                // So in order to maintain the hidden filtered items, just hide any that are not filtered and match the term
                // Ideally, it would be better to re-render the filtered list based on the search term...
                $.each(this.$('.filter-list-item:not(.filtered)'), function() {
                    if(this.dataset.filter.match(termPattern) === null) {
                        $(this).hide();
                    }
                });
            }
        },

        addFilterHandler: function(e) {
            Component.prototype.addFilterHandler.call(this, e);
        },

        clearFilterItems: function(e) {
            e.preventDefault();
            this.$('.items-filter').val('');
            this.$('.filter-list-item:not(.filtered)').show();
        }
    });

    return FilterableComponent;
});