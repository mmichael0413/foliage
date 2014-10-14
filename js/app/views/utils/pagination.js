define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener');

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
            this.firstPage();
            this.closePages();
            this.currentPage();
            this.lastPage();
        },
        setupText: function () {
            this.infoText();
            this.totalCount();
        },
        firstPage: function () {
            if (this.config.totalPages > 1 && this.config.currentPage > 1) {
                this.model.firstPage = 1;
            }
        },
        closePages: function () {
            if (this.config.totalPages > 1) {
                this.model.pages = [];
                this.model.pages.push(this.config.currentPage);
                this.model.showPages = true;
                var arrayLength = 0;

                while (this.model.pages.length != this.config.maxShown) {
                    if (this.config.totalPages - 1 > this.model.pages[arrayLength]) {
                        this.model.pages.push(this.model.pages[arrayLength] + 1);
                    }

                    if (this.model.pages[0] > 2) {
                        this.model.pages.unshift(this.model.pages[0] - 1);
                    }

                    arrayLength = this.model.pages.length - 1;
                    if ((this.config.totalPages - 1 == this.model.pages[arrayLength]) && this.model.pages[0] == 1) {
                        break;
                    }
                }

                if (this.model.pages[0] > 2) {
                    this.model.lessPages = true;
                }

                if ((this.config.totalPages - 1 > this.model.pages[arrayLength])) {
                    this.model.morePages = true;
                }
            }
        },
        currentPage: function () {
            this.model.currentPage = this.config.currentPage;
        },
        lastPage: function () {
            if (this.config.totalPages > 1 && this.config.currentPage < this.config.totalPages) {
                this.model.lastPage = this.config.totalPages;
            }
        },
        infoText: function () {
            this.model.infoText = this.config.totalPages == 1 ? 'All' : this.pageStartCount() + ' - ' + this.pageEndCount();
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
            EventListener.trigger('filter:set', [{name: 'page', value:page}]);
        }
    });
});
