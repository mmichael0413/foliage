define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
    
    /**
     * This is a companion / deviation off of thirdchannel/views/filterableListView.
     * This view provides similar functionality: a list view backed by a Backbone Collection that re-renders
     * itself when the collection changes
     *
     *
     * @type {Object}
     * @exports shared/views/async_list
     */
    AsyncListView = {

        el: 'table.table',
        bodySelector: '.body',
        collectionClass: undefined,
        // allows a subclass to specify either a rowTemplate or a full on View
        rowTemplate: undefined,
        rowView: undefined,
        activeViews: [],

        loadingHTML: "<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>",
        failHTML: "Unable to load data. Please contact Tech Support",
        

        initialize: function () {
            // setup a collection internal to the View, which contains all
            // members that we wish to draw on this page
            this.collection = new this.collectionClass();
            // listeners for the collection.
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'add', this.render);
            
            return this;
        },

        render: function () {
            
            var $body = this.$el.find(this.bodySelector);
            $body.html(this.loadingHTML);
            //     data = {
            //         rows: this.collection.toJSON()
            //     };
            // _.extend(data, this.additionalData());
            this._clearActiveViews();
            
            $body.empty().append(this._renderData(this.collection));
            
            this.afterRender();
            return this;
        },

        _clearActiveViews: function () {
            var i = this.activeViews.length;
            while(i--) {
                this.activeViews[i].remove();
            }
            this.activeViews = [];
        },

        _renderData: function (collection) {
            var shadowBody = $("<div></div>"),
                self = this,
                view;
            if (this.rowView !== undefined) {
                this.collection.each(function (model) {
                    view = new self.rowView({model:model}).render();
                    shadowBody.append(view.$el);
                    self.activeViews.push(view);
                });
            } else if (this.rowTemplate) {
                this.collection.each(function (model) {
                    shadowBody.append(HandlebarsTemplates[self.rowTemplate](model.toJSON()));
                });
            } else {
                console.error("No template or View set!");
            }
            return shadowBody;
        },

        /**
         * Bootstraps some initial collection data. looks for an 'items' array in data
         * 
         * @param  {Array} data [description]
         */
        // todo: change this name
        bootstrapCollection: function (data) {
            this.collection.reset(data.items);
        },

        /**
         * If the collection is not already loaded, use this function instead.
         * Fetches the collection, then calls 'render', unless there's a failure, in which case 'fetchFail' will be called
         * 
         */
        fetch: function () {
            var self = this;

            self.collection.fetch({reset:true})
                .done(function () {
                    self.render.apply(self);
                })
                .fail(function () {
                    self.fetchFail.apply(self, arguments);
                });
        },

        additionalData: function () {
            return {};
        },

        afterRender: function () {},

        fetchFail: function () {
            this.$el.find(this.bodySelector).html(this.failHTML);
            this.afterRender();
        }
    };
    return Backbone.View.extend(AsyncListView);
});