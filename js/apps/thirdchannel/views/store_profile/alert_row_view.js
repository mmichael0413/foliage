define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Handlebars = require('handlebars'),

        /**
         * A wrapper around a row in an Alerts listing. Used slightly differently than normal Backbone Views, as the rows are 
         * already rendered, one of these just sits on top of 
         * 
         * Should be usable in either open or resolved; the initialization accepts a view class to initialize during row expansion
         * 
         * @exports thirdchannel/views/store_profile/alert_row_view
         */
        AlertRowView = Backbone.View.extend({
                events: {
                    'click .expand': 'toggleSubViewHandler'
                },

                initialize: function (options) {
                    this.subViewClass = options.subViewClass;
                    // maintain a back ref to the parent collection
                    this.collection = options.collection;
                },

                toggleSubViewHandler: function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    this._toggleSubView(this.$el.find(e.currentTarget));
                },

                _toggleSubView: function ($button) {
                    // toggle both the button class to make it solid, plus add the class which will 'reveal' the row
                    $button.toggleClass('solid');
                    //$itemRow.toggleClass('active');
                    this.$el.toggleClass('active');
                    // remove if present any existing SubViews
                    // 
                    if (this.subView) {
                        this._clearSubView();
                    } else {
                        
                        this._createSubView($button);
                    }
                },

                _clearSubView: function () {
                    this.stopListening(this.subView);
                    this.subView.remove();
                    delete this.subView;
                    // be sure to replace the target row we just destroyed
                    this.$el.append(Handlebars.partials.alert_details_empty_row());

                },
                _createSubView: function ($button) {
                    var self = this;
                    this.subView = new this.subViewClass({url: $button[0].href});
                    this.subView.setElement(this.$el.find('.alert-details'));
                    this.subView.fetch();
                    this.listenTo(this.subView, "details:close", function () {
                        self._toggleSubView($button);
                    });
                }
        });

    return AlertRowView;


});