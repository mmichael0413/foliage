define(function(require) {
    var Backbone = require('backbone'),
        dispatcher = require('app/utils/eventListener'),
        ActiveFilterItemView = require('app/views/filter/activeFilterItem');
    /**
     * A Standard component filter view
     * 
     * @exports app/views/filter/component
     * 
     */
    var component = {
        openClassName: 'open',
        /**
         * The Events that component responds to.
         * @type {Object}
         */
        events: {
            'click .filter-item': 'toggleOpen',
            'click .filter-list-item': 'addFilterHandler',
            'click .active-filter': 'resetItem'
        },

        render: function () {
            // set up listeners for things to do with the filter param type (e.g. state)
            // for the component
            this.activeFilters = [];
            this.filterParam = this.$el.data('filter-param');
            this.listenTo(dispatcher, this.filterParam +':filter:clear', this.restoreFilter);
            return this;
        },

        toggleOpen: function (e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            var $icon = this.$el.find('.expand-indicator'),
                $list = this.$el.find('.filter-list');
            $icon.toggleClass(this.openClassName);
            $list.toggleClass(this.openClassName);
        },
        /**
         * Handler for the click event
         * 
         * @param {event} e A jquery click event
         */
        addFilterHandler: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this._addFilter(this.$el.find(e.currentTarget));
            dispatcher.trigger('filter:request');
        },

        addFilterByValue: function (value) {
            var $link = this.$el.find(this._buildFilterItemLink(value));
            this._addFilter($link);
        },

        /**
         *  Responsible for actually adding the filter to the view
         * 
         * @param {JQuery} $link
         */
        _addFilter: function ($link) {
            if ($link) {
                var view = new ActiveFilterItemView({
                    param: this.filterParam,
                    label: $link.text(),
                    value: $link.data('value')
                }).render();
                view.$el.appendTo(this.$el.find('.filter-item'));
                $link.hide();
                this.activeFilters.push(view);
            }
        },

        _buildFilterItemLink: function(value) {
            return ".filter-list-item[data-value='" + value +"']";

        },

        restoreFilter: function (data) {
            this.$el.find(this._buildFilterItemLink(data.value)).show();
        }
    };
    return Backbone.View.extend(component);
});