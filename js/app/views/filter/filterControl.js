define(function(require) {
    var Backbone = require('backbone'),
        dispatcher = require('app/utils/eventListener'),
        ComponentView = require('app/views/filter/component');

    /**
     *
     * The ultimate goal of the Filter is turn all of the selected items into inputs which
     * are fed via query string to the server
     */

    return Backbone.View.extend({
        el: '#site-filter',

        openClass: 'open',

        events: {
            'click .clear-filters': 'clearFilters'
        },

        initialize: function () {

            this.components = {};

            // look for any filter components within the filter, then wrap a view around them
            var components = this.$el.find('.filter-component'),
                qsHash = this.parseQueryString(),
                max = components.length,
                shouldTrigger = false,
                view;

            while(max--) {
                view = new ComponentView();
                view.setElement(components[max]);
                view.render();

                this.components[view.filterParam] = view;
                // apply the query string to any components in the filter.
                // capture the response to know if we should toggle open the filter later
                if (this._applyQS(view, qsHash) === true) {
                    shouldTrigger = true;
                }
            }

            this._applyQSGlobal(qsHash);

            this.listenTo(dispatcher, 'filter:request', this.handleFilterRequest);
            this.listenTo(dispatcher, 'filter:set', this.setFromExternal);
            // finally, check if we should Trigger the filter. This is done down here to avoid
            // repeated triggerings if we checked this in the while loop.
            if (shouldTrigger) {
                // open the filter if we have filter-component filters active, not simply a pagination
                // let my master know, yes.
                dispatcher.trigger('filter:toggle');
            }
        },
        /**
         *
         * @param view
         * @param qsHash
         * @private
         * @return true if a query string item was applied
         */
        _applyQS: function(view, qsHash) {
            var success = false;
            if (qsHash[view.filterParam]) {
                success = true;
                var i = 0,
                    items = qsHash[view.filterParam];
                for (i; i < items.length; i++) {
                    view.addFilterByValue(items[i]);
                }
            }
            return success;

        },

        /**
         *
         * @param qsHash
         * @private
         */
        _applyQSGlobal: function (qsHash) {
            // look up all .global inputs, then see if we have values in the query hash
            var globals = this.$el.find('input.global'),
                i = globals.length;
            while(i--) {
                if (qsHash[globals[i].name]) {
                    globals[i].value = qsHash[globals[i].name][0];
                }
            }
        },

        handleFilterRequest: function () {
            this.$el.find('input[name="page"]').val(1);
            this.broadCastQueryString();
        },

        broadCastQueryString: function () {
            dispatcher.trigger('filter:query', this.$el.serialize());
        },

        /**
         *
         * @param data
         */
        setFromExternal: function (fields) {
            var $input,
                threshold = 0,
                i = 0;
            for (i = 0; i < fields.length; i++) {
                $input = this.$el.find('input[name="' + fields[i].name + '"]');
                if ($input) {

                    $input.val(fields[i].value);
                    threshold++;
                }
            }
            if (threshold > 0) {
                this.broadCastQueryString();
            }
        },

        /**
         * Parses the query string, building a hash of arrays, accounting for multiple
         * instances of query parameters. Eg. Rails allows for 'parameter[]' to contain multiple
         * parameters in the back end
         *
         * @returns {{}}
         */
        parseQueryString: function () {
            var vars = decodeURI(window.location.search.substring(1)).split("&"),
                data = {};
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (!data[pair[0]]) {
                    data[pair[0]] = [];
                }
                data[pair[0]].push(pair[1]);

            }

            return data;
        }
    });
});