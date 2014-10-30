define(function(require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),

        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates.pagination,
        events: {
            'click .page': 'applyPageChange'
        },
        initialize: function (config) {
            this.config = config;
            this.model = {};
            this.setupPages();
            this.setupText();
        },
        render: function () {
            this.setElement(this.template(this.model));
            return this;
        },
        setupPages: function () {
            this.model.showPages = (this.config.totalPages > 1);
            this.model.currentPage = this.config.currentPage;
            this.model.totalPages = this.config.totalPages;
            this.pageRange();
            this.firstPage();
            this.lastPage();
        },
        setupText: function () {
            this.infoText();
            this.totalCount();
        },
        firstPage: function () {
            if (this.model.showPages) {
                this.model.firstPage = (_.first(this.model.pages) != 1);
                this.model.lessPages = (_.first(this.model.pages) > 2);
            }
        },
        pageRange: function () {
            if (this.model.showPages) {
                var maxShown = this.config.maxShown - 1,
                    rangeStart = Math.max((this.config.currentPage - Math.ceil(maxShown / 2)) - Math.max((this.config.currentPage + Math.floor(maxShown / 2)) - this.config.totalPages, 0), 1),
                    rangeEnd   = Math.min((this.config.currentPage + Math.floor(maxShown / 2)) - Math.min((this.config.currentPage - Math.ceil(maxShown / 2)) - 1, 0), this.config.totalPages) + 1;

                this.model.pages = _.range(rangeStart, rangeEnd);
            }
        },
        lastPage: function () {
            if (this.model.showPages) {
                this.model.lastPage = (_.last(this.model.pages) != this.config.totalPages);
                this.model.morePages = (_.last(this.model.pages) < (this.config.totalPages - 1));
            }
        },
        infoText: function () {
            this.model.infoText = this.pageStartCount() + ' - ' + this.pageEndCount();
        },
        pageStartCount: function () {
            return (this.config.pageCount * (this.config.currentPage - 1)) + 1;
        },
        pageEndCount: function () {
            return (this.config.totalPages == (this.config.currentPage)) ? this.config.totalCount : this.config.pageCount * this.config.currentPage;
        },
        totalCount: function () {
            this.model.totalCount = this.config.totalCount;
        },
        applyPageChange: function (e) {
            e.preventDefault();
            var page = $.trim($(e.currentTarget).text());
            context.trigger('filter:set', [{name: 'page', value:page}]);
            this.trigger('new_page', page);
        }
    });
});
