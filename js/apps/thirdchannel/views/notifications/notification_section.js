define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        NotificationList = require('app/views/notifications/notification_list'),
        PaginatorView = require('app/views/notifications/notification_paginator'),
        FilterControl = require('app/views/filter/filterControl');

    return Backbone.View.extend({
        initialize: function (options) {
            this.el = options.el;
            this.url_action = options.url_action;
            this.bootstrap = options.bootstrap;
            this.url = window.location.pathname + '/'+ this.url_action;
            this.emptyParams = options.emptyParams;
        },
        start: function () {
            this.pager = new PaginatorView({el: this.$('.pagination-holder'), url: this.url + '_page'});
            new NotificationList({el: this.$('table'), url: this.url, emptyTemplateAttributes: this.emptyParams, pager: this.pager}).collection.reset(this.bootstrap);

          //  new FilterControl({el: this.el});
        }
    });
});