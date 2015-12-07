define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        _ = require('underscore'),
        $ = require('jquery'),
        rx = require('rxjs'),
        Templates = require('handlebarsTemplates'),
        WidgetView = require('thirdchannel/views/reports/index/widget'),

        AsyncReportCollection = Backbone.Model.extend({
            // need a url for fetching the report
        }),

        /**
         * Acts as a mechanism for loading report widgets asynchronously. Requires as input a json object containing
         * the report breakdown, eg.:
         *     report
         *         -> sections -> subsections -> widgets
         *  at each level, we expect a 'uuid' field. 
         *
         * This view must be passed the reportData as an initialization parameter
         * 
         * @type View
         */
        AsyncReportLoader = {

            initialize: function (reportData) {
                if (!reportData) {
                    console.error("No report data provided!");
                }
                this.reportData = reportData;
                this.report = new AsyncReportCollection(reportData);
            },

            layout: function () {
                var self = this;
                _.each(this.report.get('sections'), function(section) {
                    self._layoutSection(section);
                });
            },

            loadWidgets: function (filter) {
                var self = this,
                    promise = $().promise();
                _.each(self._extractWidgetMetaInfo(this.report), function(widget) {
                    promise = promise.then(function() {
                        return $.getJSON(context.links.reports.widgets +"?uuid=" + widget.report_widget_uuid + "&" + filter)
                            .done(function(data) {
                                self._renderWidget.call(self, widget, data);
                            });
                    });
                });
                promise.done(function () {
                    self.$el.find(".widget-spinner").remove();
                    self.trigger("reports:async:complete");
                });
            },

            _extractWidgetMetaInfo: function(report) {
                var widgetMetaData = [];
                _.each(report.get('sections'), function (section) {
                    _.each(section.subsections, function(subsection){
                        _.each(subsection.widgets, function (widget) {
                            if (widget.report_widget_uuid) {
                                widgetMetaData.push(widget);
                            }
                        });
                    });
                });
                return widgetMetaData;
            },

            _renderWidget: function(meta_data, widget_data) {
                // look at each rendered widget. if zero, render right away. other wise, step through each widget
                // if target.idx < current.idx, proceed
                // if target.idx > current.idx, preppend to target

                if (meta_data.report_widget_uuid !== widget_data.uuid) {
                    console.error("Meta data report_widget uuid and the response uuid are not equal!");
                }
                // I am not a fan of this.
                var $widget = new WidgetView(widget_data).render().$el,
                    $widgetsContainer = this.$el.find("[data-id='" + meta_data.report_subsection_uuid +"'] .widgets"),
                    $widgets = $widgetsContainer.find('.widget'),
                    max = $widgets.length,
                    rendered = false,
                    i = 0,
                    existingIdx = 0;
                // set the index on the main widget
                $widget.attr('data-idx', meta_data.idx);

                for (i = 0; i < max; i++) {
                    existingIdx = parseInt($($widgets[i]).attr('data-idx'), 10);
                    if (existingIdx && existingIdx > meta_data.idx) {
                        $widget.insertBefore($($widgets[i]));
                        rendered = true;
                        break;
                    }
                }
                if (!rendered) {
                    $widgetsContainer.append($widget);    
                }
                
                //trigger the drawing of the d3 widgets
                context.trigger("report post render");
            },

            _layoutSection: function(section) {
                section.title = section.name;
                var $section = $(Templates['thirdchannel/reports/index/section'](section));

                _.each(section.subsections, function(subsection) {
                    subsection.title = subsection.name;
                    var $subsectionsContainer = $section.find('.subsections');
                    $subsectionsContainer.append(Templates['thirdchannel/reports/index/subsection'](subsection));
                    $subsectionsContainer.append("<i class='fa fa-spin fa-spinner fa-2x widget-spinner'></i>");
                });
                this.$el.append($section);
            }
        };


    _.extend(AsyncReportLoader, Backbone.Events);
    return Backbone.View.extend(AsyncReportLoader);
});