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
        className: "filter-component",
        templateName: 'thirdchannel/filters/list_component',

        openClassName: 'open',
        visibilityOptions: {},
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
            'blur input[type="datetime"]': 'handleDateBlur',
            'keyup .items-filter, change .items-filter': 'handleFilterItems',
            'click .clear-items-filter': 'clearFilterItems'
        },

        initialize: function (options) {            
            this.model = options.model;
            
            this._configureVisibility();

            this.activeFilters = [];
            this.filterParam = this.model.get('name');
            this.$el.html(handlebarsTemplates[this.templateName](this.model.toJSON()));
            this.listenTo(context, this.filterParam +':filter:clear', this.restoreFilter); 
        },

        render: function () {
            if (this._visibilityCheck()) {
                this.$el.html(handlebarsTemplates[this.templateName](this.model.toJSON()));    
            } else {
                this.$el.html("<div class='placeholder'></div>");
            }
            return this;
        },

        _configureVisibility: function () {
            this.visibilityOptions = this.model.get("visibility");

            // set up listeners for things to do with the filter param type (e.g. state)
            // for the component
            // 
            if (Object.keys(this.visibilityOptions).length > 0) {
                var self = this;
                _.forEach(this.visibilityOptions, function (visibilityData, key) {
                    // check to see if filter is present on page
                    self.listenTo(context, "filter:state:changed:" + key, function (event) {
                        self.render();
                    });
                });
            }
        },

        /**
         * 
         * @return {boolean} If true, the filter should render. If False, then no. 
         */
        _visibilityCheck: function () {
            var show = true;
            _.forEach(this.visibilityOptions, function (visibilityData, filterParamName) {
                // default to true if the filter name isn't even in the store (e.g. not on the page)
                show = !context.stores.filter.has(filterParamName);
                if (visibilityData.values.indexOf(context.stores.filter.getFilterState(filterParamName)) > -1) {
                    show = true;
                    return;
                }
            });
            return show;

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
            if(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            var $icon = this.$('.expand-indicator'),
                $list = this.$('.filter-list');

            $icon.toggleClass(this.openClassName);
            $list.toggleClass(this.openClassName);
        },
        closeFilter: function() {
            this.$('.expand-indicator').removeClass(this.openClassName);
            this.$('.filter-list').removeClass(this.openClassName);
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
                $link.addClass('filtered');
                $link.hide();
            }
        },

        _addFilter: function (label, value) {
            var filterItemData = {
                param: this.filterParam,
                label: label.trim(),
                value: value
            }, view = new ActiveFilterItemView(filterItemData).render();

            view.$el.appendTo(this.$('.filter-item'));
            this.activeFilters.push(view);
            context.trigger("filter:item:selected", filterItemData);
        },

        _buildFilterItemLink: function(value) {
            return ".filter-list-item[data-value='" + value +"']";

        },

        restoreFilter: function (data) {
            var $link = this.$el.find(this._buildFilterItemLink(data.value));
            $link.show();
            $link.removeClass('filtered');
        }
    };



    return Backbone.View.extend(component);
});