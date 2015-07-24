define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        SelectedStoresStore = require('oddjob/stores/selectedStores'),
        FrequencyRowView = require('oddjob/views/schedules/frequencyRow'),
        

        FrequencyCreateView = {
            events: {
                'click .submit': 'preSubmit',
                'submit'    : 'preSubmit'
            },

            initialize: function () {
                this.listenTo(context, 'stores:selected:count', this.updateCount);
                this.subViews = [];
            },

            render: function () {
                if (!context.hasOwnProperty('frequencies')) {
                    console.error("Context does not have any 'frequencies'!");
                    return this;
                }
                this.renderRows(new Backbone.Collection(context.frequencies));
                return this;
            },

            preSubmit: function (e) {
                this.$el.find("#storeUuidInput").val(SelectedStoresStore.uuids);
            },

            updateCount: function (count) {
                this.$el.find('#storeCount').text(count);
            },
            renderRows: function (collection) {
                    console.log("Creating for frequencies:", collection);
                    collection.each (function (item, index) {
                        item.set('index', index);
                        var view = new FrequencyRowView({model: item}).render();
                        this.$el.find('.frequencies-container').append(view.$el);
                        this.subViews.push(view);
                    }.bind(this));
            }
    };

    return Backbone.View.extend(FrequencyCreateView);
});