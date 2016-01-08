define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        _ = require('underscore'),
        $ = require('jquery'),
        Templates = require('handlebarsTemplates'),
        WidgetView = require('thirdchannel/views/reports/index/widget'),

        SyncReportLoader = {

            initialize: function (reportData) {
                if (!reportData) {
                    console.error("No report data provided!");
                }
                this.reportData = reportData;
            },

            layout: function () {
              this._layoutSections(this.reportData.sections);
            },

            loadWidgets: function () {
              context.trigger("report post render");
            },

            _layoutSections: function(sections) {
              _.each(sections, function(section) {
                this._layoutSection(section);
              }.bind(this));
            },

            _layoutSection: function(section) {
                var $section = $(Templates['thirdchannel/reports/index/section'](section));
                _.each(section.subsections, function(subsection) {
                    var $subsectionsContainer = $section.find('.subsections');
                    var $subsection = $(Templates['thirdchannel/reports/index/subsection'](subsection));
                    _.each(subsection.widgets, function(widget) {
                      var $widget = new WidgetView(widget).render().$el;
                      $widget.appendTo($subsection);
                    });
                    $subsectionsContainer.append($subsection);
                });
                this.$el.append($section);
            }
        };


    _.extend(SyncReportLoader, Backbone.Events);
    return Backbone.View.extend(SyncReportLoader);
});
