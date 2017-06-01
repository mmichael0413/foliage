define(function(require) {
  var Backbone              = require('backbone'),
      HandlebarsTemplates   = require('handlebarsTemplates'),
      context               = require('context'),
      LoadingView           = require('thirdchannel/views/utils/loading'),
      PaginationView        = require('thirdchannel/views/utils/pagination'),
      BreakdownListModel    = require('thirdchannel/models/reports/breakdown/breakdown_list'),
      BreakdownStoresView   = require('thirdchannel/views/reports/breakdown/show/stores'),
      BreakdownVisitsView   = require('thirdchannel/views/reports/breakdown/show/visits'),
      BreakdownListItemView = require('thirdchannel/views/reports/breakdown/show/list_item');

  return Backbone.View.extend({
    el: ".report-breakdown",
    template: HandlebarsTemplates['thirdchannel/reports/breakdown/show/breakdown_list'],
    initialize: function (options) {
      this.model = new BreakdownListModel(options);
      this.listenTo(context, 'filter:query', this.applyItem);
      this.loadingView = new LoadingView();
    },
    render: function () {
      var self = this;
      this.$el.html(this.loadingView.render().$el);
      return this;
    },
    addPages: function (value) {
      this.$el.find('.pages').empty().append(new PaginationView(value).render().$el);
    },
    addListItem: function (value) {
      this.$el.find('.list-items').append(new BreakdownListItemView(value).render().$el);
    },
    addStoreItem: function (value) {
      this.$el.find('.list-items').append(new BreakdownStoresView(value).render().$el);
    },
    addVisitItem: function (value) {
      this.$el.find('.list-items').append(new BreakdownVisitsView(value).render().$el);
    },
    constructView: function (model) {
      this.$el.html(this.template(model.toJSON()));
      this.addPages(model.get('pages'));
      if (model.get('items').length > 0) {
        var that = this;
        if (this.model.type == 'visits') {
          $.each(model.get('items'), function (key, value) {
            that.addVisitItem(value);
          });
        } else if (this.model.type == 'stores') {
          $.each(model.get('items'), function (key, value) {
            that.addStoreItem(value);
          });
        } else {
          $.each(model.get('items'), function (key, value) {
            that.addListItem(value);
          });
        }
      } else {
        this.$el.find('.list-items').append(HandlebarsTemplates['thirdchannel/no_results']);
      }
      this.loadingView.remove();
    },
    applyItem: function () {
      var self = this;
      this.$el.empty();
      this.$el.append(this.loadingView.render().$el);
      this.model.fetch({success: function (model) {
        self.$el.find('.report-info-list').remove();
        self.constructView(model);
      }});
    }
  });
});
