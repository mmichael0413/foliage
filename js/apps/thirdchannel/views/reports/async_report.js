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
                    lookup = {};
                rx.Observable.from(self._extractWidgetMetaInfo(this.report))
                .map(function(widget) {
                    // cache the widget meta_info by uuid for later extraction
                    lookup[widget.report_widget_uuid] = widget;
                    return widget;
                })
                .flatMap(function(widget) {
                    return rx.Observable.fromPromise($.getJSON(context.links.reports.widgets +"?uuid=" + widget.report_widget_uuid + "&" + filter));
                })
                .subscribe(function (payload) {
                    self._renderWidget.call(self, lookup[payload.uuid], payload);
                }, function(err) {
                    console.error("Error loading widgets: ", err);
                }, function () {
                    console.info("Finished loading");
                    self.$el.find(".widget-spinner").remove();
                });
            },

            _extractWidgetMetaInfo(report) {
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
            
            _renderWidget(meta_data, widget_data) {
                if (!(meta_data.report_widget_uuid === widget_data.uuid)) {
                    console.error("Meta data report_widget uuid and the response uuid are not equal!");
                }

                this.$el.find("[data-id='" + meta_data.report_subsection_uuid +"'] .widgets").append(new WidgetView(widget_data).render().$el);
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



    return Backbone.View.extend(AsyncReportLoader);
});