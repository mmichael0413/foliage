define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        LoadingView = require('thirdchannel/views/utils/loading'),
        AsyncReportLoader = require('thirdchannel/views/reports/async_report'),
        SyncReportLoader = require('thirdchannel/views/reports/sync_report');

    return Backbone.View.extend({
        el: ".report",
        initialize: function() {
            this.loadingView = new LoadingView();
            this._attachLoader();
            this.listenTo(this.reportLoader, "reports:async:complete", function() {
                this.$el.find(".loading-section").slideUp(500);
                this.listenToOnce(context, "filter:query", this.rerender);
            }.bind(this));
            this.listenTo(this.reportLoader, "reports:async:incomplete", this.rerender);
        },
        _attachLoader: function() {
            if(window.report_pdf){
              this.reportLoader = new SyncReportLoader(context.current_report);
            } else {
              this.reportLoader = new AsyncReportLoader(context.current_report);
            }
            this.reportLoader.setElement(this.$el);
        },
        render: function() {
          this.$el.empty();
          if(!window.report_pdf){
            this.$el.append(this.loadingView.render().$el);
          }
          this.reportLoader.layout();
          this.reportLoader.loadWidgets(window.location.search.substring(1));
          return this;
        },
        rerender: function(){
          var qs = window.location.search.substring(1);
          this.$el.empty();
          this.$el.append(this.loadingView.render().$el);
          var report_id_match = /report=(\d+)/.exec(qs);
          var uri = context.links.reports.meta;
          if(report_id_match !== null){
              uri += "?report=" + report_id_match[1];
          }
          $.getJSON(uri, function(data){
              this.reportLoader.layout(data);
              this.reportLoader.loadWidgets(qs);
          }.bind(this));
          return this;
        }
    });
});
