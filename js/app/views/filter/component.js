define(function(require) {
    var Backbone = require('backbone'),
        dispatcher = require('app/utils/eventListener'),
        ActiveFilterItemView = require('app/views/filter/activeFilterItem');

    return Backbone.View.extend({
        openClassName: 'open',
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
            e.preventDefault();
            e.stopPropagation();

            var $icon = this.$el.find('.expand-indicator'),
                $list = this.$el.find('.filter-list');
            $icon.toggleClass(this.openClassName);
            $list.toggleClass(this.openClassName);
        },

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
    });
});