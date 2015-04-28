define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
        ActiveFilterItemView = require('thirdchannel/views/filter/activeFilterItem');
    /**
     * A Standard component filter view
     * 
     * @exports thirdchannel/views/filter/component
     * 
     */
    var component = {

        templateName: 'thirdchannel/filters/list_component',

        openClassName: 'open',
        /**
         * The Events that component responds to.
         * @type {Object}
         */
        events: {
            'click .filter-item': 'toggleOpen',
            'click .filter-list-item': 'addFilterHandler',
            'click .active-filter': 'resetItem',
            // used by subclasses
            'change input[type="datetime"]': 'handleDateChange',
            'blur input[type="datetime"]': 'handleDateBlur'
        },

        

        render: function () {
            // set up listeners for things to do with the filter param type (e.g. state)
            // for the component
            this.activeFilters = [];
            this.filterParam = this.model.get('name');
            
            this.$el.html( handlebarsTemplates[this.templateName]( this.model.toJSON() ) );
            this.listenTo(context, this.filterParam +':filter:clear', this.restoreFilter);
            return this;
        },

        /**
         * Removes all active filter items from the Component
         */
        clear: function () {
            _.each(this.activeFilters, function(filter) {
                filter.clear();
                filter.remove();
            });
            this.activeFilters = [];
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
        closeFilter: function() {
            this.$el.find('.expand-indicator').removeClass(this.openClassName);
            this.$el.find('.filter-list').removeClass(this.openClassName);
        },
        /**
         * Handler for the click event
         * 
         * @param {event} e A jquery click event
         */
        addFilterHandler: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this._addFilterFromLink(this.$el.find(e.currentTarget));
            context.trigger('filter:request');
        },

        addFilterByValue: function (value) {
            var $link = this.$el.find(this._buildFilterItemLink(value));
            this._addFilterFromLink($link);
        },

        /**
         *  Responsible for actually adding the filter to the view
         * 
         * @param {JQuery} $link
         */
        _addFilterFromLink: function ($link) {
            if ($link.length > 0) {
                this._addFilter($link.text(), $link.data('value'));
                $link.hide();
            }
        },
        _addFilter: function (label, value) {
            var view = new ActiveFilterItemView({
                param: this.filterParam,
                label: label,
                value: value
            }).render();
            view.$el.appendTo(this.$el.find('.filter-item'));
            
            this.activeFilters.push(view);
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