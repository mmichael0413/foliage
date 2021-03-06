define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chosen = require('chosen'),
        TimePicker = require('timepicker'),
        DateTimePicker = require('dateTimePicker'),
        Select2 = require('select2'),
        context = require('context'),
        DateRange = require('thirdchannel/models/manage/dateRange'),
        StoreItem = require('thirdchannel/views/manage/jobs/store_item'),
        DateRangeView = require('thirdchannel/views/manage/jobs/dateRange'),
        AssignmentHistoryModal = require('thirdchannel/views/manage/jobs/assignmentHistory');

    var durationOptions = [];
    var currentDuration = 60;
    while(currentDuration <= 840) {
        var hours = Math.floor(currentDuration / 60);
        var minutes = currentDuration % 60;
        var display = hours + " Hour" + (hours > 1 ? "s " : " ");

        if(minutes > 0) {
            display += minutes + " Minutes";
        }

        durationOptions.push(
            {
                name:  display,
                value: currentDuration + ""
            }
        );
        currentDuration += 15;
    }

    var JobCreate = Backbone.View.extend({
        el: '.job-request-container',

        events: {
            'click .store-add': 'handleStoreAdd',
            'click .recommend_start_time': 'toggleRecommendedTimeFields',
            'click .add-date-range': 'addDateRange',
            'click .submit-job-request': 'handleSubmit',
            'click .cancel-job-request': 'handleCancel',
            'click .display-assignment-history': 'loadModal'
        },

        template: HandlebarsTemplates['thirdchannel/manage/jobs/create'],

        initialize: function(options) {
            _.bindAll(this, 'renderRanges', 'renderRange');

            this.canChangeAssignee = options.canChangeAssignee;
            this.canChangeRequester = options.canChangeRequester;
            this.requiresLeadTime = options.requiresLeadTime;
            this.stores = options.stores;
            this.surveys = options.surveys;
            this.surveyTopics = options.surveyTopics;
            this.timezones = options.timezones;
            this.assignee = options.assignee;
            this.requester = options.requester;
            this.assignmentsHistory = options.assignmentsHistory;

            var initialRange = [];
            if(this.model.get('schedulable_ranges')) {
                initialRange = _.map(this.model.get('schedulable_ranges'), function(sr) {
                    return new DateRange(sr);
                });
            } else {
                initialRange = [new DateRange()];
            }
            this.ranges = new Backbone.Collection(initialRange);

            this.listenTo(this.stores, 'reset', this.renderStores);
        },

        render: function() {
            var data = {
                surveys: this.surveys,
                surveyTopics: this.surveyTopics,
                timezones: this.timezones,
                durationOptions: durationOptions,
                canChangeRequester: this.canChangeRequester,
                hasAssignmentsHistory: !(this.assignmentsHistory.isEmpty())
            };
            data = _.extend(data, this.model.attributes);

            var hasStartTime = data.start_time && data.start_time !== "";

            data.recommendedStartTime = hasStartTime ? "checked" : "";
            data.recommendedStartTimeFieldsClass = hasStartTime ? "" : "hide";

            this.$el.html(this.template(data));

            this.$('.survey_uuid, .duration, .survey_topic_uuids').chosen({disable_search: true, width: "100%"});
            this.$('.timezone').chosen({width: "100%"});
            this.$('.start_time').timepicker({scrollDefault: '08:00'});

            var $assigneeIdEl = this.$('.assignee_id');

            $assigneeIdEl.select2({
                ajax: {
                    url: '/programs/' + context.programId + '/manage/users_search',
                    dataType: 'json',
                    delay: 200,
                    data: function (params) {
                        return {
                            format: 'json',
                            name: params.term,
                            per: 25
                        };
                    },
                    processResults: function (data) {
                        return {
                            results: data.map(function (item) {
                                item.text = item.name + ' <' + item.email + '> - ' + item.address;
                                return item;
                            })
                        };
                    },
                    cache: "false"
                },
                minimumInputLength: 3,
                placeholder: "Select...",
                allowClear: true
            });

            if(data.assignee_id) {
                var assigneeDisplay = this.assignee.name + ' <' + this.assignee.email + '> - ' + this.assignee.address;
                $assigneeIdEl.append($("<option selected></option>").val(data.assignee_id).text(assigneeDisplay));
            }

            if(!this.canChangeAssignee) {
                $assigneeIdEl.attr('disabled', true);
            } else if(this.canChangeAssignee && data.assignee_id && data.date_scheduled) {
                $assigneeIdEl.on('select2:unselecting', function(e) {
                    if(data.date_scheduled) {
                        if(!confirm("This request has been scheduled already, are you sure you want to remove the assignee?")) {
                            e.preventDefault();
                            return null;
                        }
                    }
                });

                $assigneeIdEl.on('select2:selecting', function(e) {
                    if(data.date_scheduled) {
                        if(!confirm("This request has been scheduled already, are you sure you want to change the assignee?")) {
                            e.preventDefault();
                            return null;
                        }
                    }
                });
            }

            if(this.canChangeRequester) {
                var $requesterIdEl = this.$('.requester_id');

                $requesterIdEl.select2({
                    ajax: {
                        url: '/programs/' + context.programId + '/manage/users_search',
                        dataType: 'json',
                        delay: 200,
                        data: function (params) {
                            return {
                                format: 'json',
                                name: params.term,
                                per: 25
                            };
                        },
                        processResults: function (data) {
                            return {
                                results: data.map(function (item) {
                                    item.text = item.name + ' <' + item.email + '> - ' + item.address;
                                    return item;
                                })
                            };
                        },
                        cache: "false"
                    },
                    minimumInputLength: 3,
                    placeholder: "Select...",
                    allowClear: true
                });

                if(data.user_id) {
                    var requesterDisplay = this.requester.name + ' <' + this.requester.email + '> - ' + this.requester.address;
                    $requesterIdEl.append($("<option selected></option>").val(this.requester.id).text(requesterDisplay));
                }
            }

            this.renderRanges();
            return this;
        },

        renderStores: function() {
            var $storeList = this.$('.store-list');
            this.stores.each(function(store) {
                var storeItem = new StoreItem({model: store, jobRequestId: this.model.id});
                $storeList.append(storeItem.render().el);
            }.bind(this));
        },

        renderRanges: function() {
            this.ranges.each(this.renderRange.bind(this));
        },

        renderRange: function(range) {
            var view = new DateRangeView({model: range, requiresLeadTime: this.requiresLeadTime});
            this.$('.date-range-list').append(view.render().el);
        },

        loadModal: function(e) {
            e.preventDefault();
            this.modal = new AssignmentHistoryModal({collection: this.assignmentsHistory});
            this.$el.append(this.modal.render().$el);
        },

        toggleRecommendedTimeFields: function(e) {
            if(e.target.checked) {
                this.$('.start-time-container').removeClass('hide');
            } else {
                this.$('.start-time-container').addClass('hide');
                this.$('.start_time').val("");
                this.$('.timezone').val("");
            }
        },

        addDateRange: function(e) {
            e.preventDefault();

            var range = new DateRange();
            this.ranges.add(range);
            this.renderRange(range);
        },

        handleStoreAdd: function(e) {
            e.preventDefault();

            var ranges = this.ranges
                .map(function(r) {
                    return {
                        start: r.get('start'),
                        end: r.get('end')
                    };
                });

            var data = {
                id: this.model.id,
                survey_uuid: this.$('.survey_uuid').val(),
                duration: this.$('.duration').val(),
                recommended_start_time: this.$('.recommend_start_time').is(':checked'),
                start_time: this.$('.start_time').val(),
                timezone: this.$('.timezone').val(),
                survey_topic_uuids: this.$('.survey_topic_uuids').val(),
                notes: this.$('.notes').val(),
                assignee_id: this.$('.assignee_id').val(),
                requester_id: this.$('.requester_id').val(),
                schedulable_ranges : ranges
            };

            // save current state
            window.sessionStorage.setItem('job-request', JSON.stringify(data));

            window.location = '/programs/' + context.programId + '/stores';
        },

        handleSubmit: function(e) {
            e.preventDefault();

            // Remove all errors first
            $('.job-request-form .error').removeClass('error');

            var programStoreIds = this.stores.map(function(s) { return s.get('uuid'); });

            // filter out any incomplete start/end date ranges
            var ranges = this.ranges
                .filter(function(r) {
                    var start = r.get('start'),
                        end = r.get('end');

                    return start && start !== "" && end && end !== "";
                })
                .map(function(r) {
                    return {
                        start: r.get('start'),
                        end: r.get('end')
                    };
                });

            var data = {
                survey_uuid: this.$('.survey_uuid').val(),
                duration: this.$('.duration').val(),
                recommended_start_time: this.$('.recommend_start_time').is(':checked'),
                start_time: this.$('.start_time').val(),
                timezone: this.$('.timezone').val(),
                survey_topic_uuids: this.$('.survey_topic_uuids').val(),
                notes: this.$('.notes').val(),
                assignee_id: this.$('.assignee_id').val(),
                requester_id: this.$('.requester_id').val(),
                program_store_uuids: programStoreIds,
                schedulable_ranges : ranges
            };

            var errors = false;
            if(!data.survey_uuid || data.survey_uuid === "") {
                errors = true;
                this.$('.survey_uuid').parent().addClass('error');
            }

            if(!data.duration || data.duration === "") {
                errors = true;
                this.$('.duration').parent().addClass('error');
            }

            if(data.recommended_start_time && (!data.start_time || data.start_time === "")) {
                errors = true;
                this.$('.start_time').parent().addClass('error');
            }

            if(!data.survey_topic_uuids || data.survey_topic_uuids.length === 0) {
                errors = true;
                this.$('.survey_topic_uuids').parent().addClass('error');
            }

            if(!data.program_store_uuids || data.program_store_uuids.length === 0) {
                errors = true;
                this.$('.store-list-container').addClass('error');
            }

            if(!data.schedulable_ranges || data.schedulable_ranges.length === 0) {
                errors = true;
                this.$('.date-range-container').addClass('error');
            }

            if(data.timezone && data.timezone !== "") {
                // find the offset value...
                var tzIndex = _.findIndex(this.timezones, {name: data.timezone});

                if(tzIndex !== -1) {
                    var selectedTz = this.timezones[tzIndex];
                    data.timezone_offset = selectedTz.offset;
                }
            }

            var id = this.model.id;

            if(!errors) {
                this.$(".submit-job-request").prop('disabled', true);
                this.$(".submit-job-request i").removeClass('ic ic_check').addClass("fa fa-spin fa-spinner");
                this.$(".cancel-job-request").addClass('hide');

                this.model
                    .save(data)
                    .then(function() {
                        window.sessionStorage.removeItem('selected-stores');
                        window.sessionStorage.removeItem('job-request');

                        // If the user is updating a single job request (not bulk create) we can redirect to the show view
                        if(id) {
                            window.location = '/programs/' + context.programId + '/manage/jobs/' + id;
                        } else {
                            window.location = '/programs/' + context.programId + '/manage/jobs';
                        }
                    })
                    .fail(function(response) {
                        alert('Oops, there was a problem with your request, please try again.');
                        this.$(".submit-job-request").prop('disabled', false);
                        this.$(".submit-job-request i").removeClass("fa fa-spin fa-spinner").addClass('ic ic_check');
                        this.$(".cancel-job-request").removeClass('hide');
                    }.bind(this));
            }
        },

        handleCancel: function(e) {
            e.preventDefault();
            if(confirm("Are you sure you want to cancel request?")) {
                window.sessionStorage.removeItem('selected-stores');
                window.sessionStorage.removeItem('job-request');
                if(this.model.id) {
                    window.location = '/programs/' + context.programId + '/manage/jobs/' + this.model.id;
                } else {
                    window.location = '/programs/' + context.programId + '/manage/jobs';
                }
            }
        }
    });

    return JobCreate;
});
