define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        _ = require('underscore'),
        $ = require('jquery'),
        rx = require('rxjs'),
        Templates = require('handlebarsTemplates'),
        WidgetView = require('thirdchannel/views/reports/index/widget'),

        /**
         * Acts as a mechanism for loading report widgets asynchronously. Requires as input a json object containing
         * the report breakdown, eg.:
         *     report
         *         -> sections -> subsections -> widgets
         *  at each level, we expect a 'uuid' field. 
         *
         * This view must be passed the reportData as an initialization parameter.
         *
         * Processing of requests is cancelled on a 'filter:query' event from the context. 
         * This object will emit an event signifying it's complete on "reports:async:complete". Note that the event
         * comes from this object itself and not the context.
         * 
         * @type View
         */
        AsyncReportLoader = {

            initialize: function (reportData) {
                if (!reportData) {
                    console.error("No report data provided!");
                }
                this.reportData = reportData;
                this.cancelObservable = rx.Observable.fromEvent(context, 'filter:query');
            },

            layout: function (report_meta) {
                if (report_meta) {
                  this.reportData = report_meta;
                }
                this._layoutSections(this.reportData.sections);
            },

            loadWidgets: function (filter) {
                var self = this,
                    activeRequests = [],
                    widgetLookup = {};
                // set up an observable to emit all widgets in this report
                rx.Observable.from(self._extractWidgetMetaInfo(self.reportData))
                .map(function(widget_meta_data) {
                    // because the resulting subscription item is the response data of the widget from the server,
                    // we need a way to reference the original widget meta_data. cache the meta_data by widget_uuid for later retrieval
                    widgetLookup[widget_meta_data.report_widget_uuid] = widget_meta_data;
                    return widget_meta_data;
                })
                // throttle just a bit so as not to overwhelm the server
                .flatMap(function(widget_meta_data, x) {
                    // generate ajax promises
                    var promise = $.getJSON(context.links.reports.widgets +"?report_widget_uuid=" + widget_meta_data.report_widget_uuid + "&report_report_uuid=" + widget_meta_data.report_report_uuid + "&" + filter);
                    // cache them... why? see below
                    activeRequests.push(promise);
                    return rx.Observable.fromPromise(promise).delay(x * 250);
                })
                .takeUntil(self.cancelObservable) // cancel this whole thing if the filter changes
                .subscribe(function (data) {
                    self._renderWidget.call(self, widgetLookup[data.uuid], data);
                }, function () {
                    console.error("Failed:", arguments);
                }, function() {
                    // because we're generating a flurry of async requests, we don't want 'stale' requests (those that were fired before the page / filter was refreshed)
                    // to complete. Because we're using an observable, we won't have them render... whoever, they'll still be active, and these are some long running requests.
                    // Once the filter changes, we kill all open active async requests to be kind to the server
                    var trigger = true;
                    _.each(activeRequests, function(request) {
                        if (request.state() == "pending") {
                            trigger = false;
                        }
                        request.abort();
                    });
                    // finally, alert any listeners that we're done (e.g. time to disable spinners)
                    if (trigger) {
                        self.trigger("reports:async:complete");
                        context.trigger('filter:request:queryString');
                    } else {
                      self.trigger("reports:async:incomplete");
                    }
                });

            },

            _extractWidgetMetaInfo: function(report) {
                var widgetMetaData = [];
                _.each(report.sections, function (section) {
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
                if (meta_data.report_widget_uuid !== widget_data.uuid) {
                    console.error("Meta data report_widget uuid and the response uuid are not equal!");
                }
                var $widget = new WidgetView(widget_data).render().$el;
                //$widget.hide();
                this.$("#widget-placeholder-"+widget_data.uuid).replaceWith($widget);
                //$widget.fadeIn(500, function() {
                    context.trigger("report post render widget_" + widget_data.uuid);
                //});
            },

            _layoutSections: function(sections) {
              _.each(sections, function(section) {
                this._layoutSection(section);
              }.bind(this));
            },

            _layoutSection: function(section) {
                section.title = section.name;
                var $section = $(Templates['thirdchannel/reports/index/section'](section));

                _.each(section.subsections, function(subsection) {
                    subsection.title = subsection.name;
                    var $subsectionsContainer = $section.find('.subsections');
                    var $subsection = $(Templates['thirdchannel/reports/index/subsection'](subsection));
                    var $widgets = $subsection.find('.widgets');
                    _.chain(subsection.widgets).sortBy('idx').each(function(widget) {
                      $('<div/>', {
                          id: 'widget-placeholder-' + widget.report_widget_uuid,
                      }).hide().appendTo($widgets);
                    });
                    $subsectionsContainer.append($subsection);
                });
                this.$el.append($section);
            }
        };


    _.extend(AsyncReportLoader, Backbone.Events);
    return Backbone.View.extend(AsyncReportLoader);
});
