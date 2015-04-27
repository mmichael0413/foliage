define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        QueryStringAwareModel = require('thirdchannel/models/labs/query_string_aware'),

        TopSkusView = {

            el: "#topSkus",
            loadingHTML: "<i class='fa fa-spin fa-spinner fa-4x'></i>",

            initialize: function () {
                this.model = new QueryStringAwareModel({baseURL: context.links.topSkus.self});
                this.$body = this.$el.find('.body');
                this.listenTo(context, 'filter:query', this.applyFilter);
                this.listenTo(this.model, 'sync', this.render);

                // get the filter to trigger what it currently has, thus getting the model to listen and fetch. yay events
                context.trigger('filter:request');
            },

            applyFilter: function (qs) {
                this.model.queryString = qs;
                this.$body.html(this.loadingHTML);
                this.model.fetch()
                .fail(function () {
                    this.$body.html("<p class='col-1-1'>There was an error fetching your data</p>");
                }.bind(this));
            },

            render: function () {
                var report = {
                    data: this.model.toJSON()
                };

                this.$body.html(templates['thirdchannel/labs/top_sku_rows'](report.data));
                
            }

        };
    return Backbone.View.extend(TopSkusView);
});