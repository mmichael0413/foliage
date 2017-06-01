define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        JobView = require('thirdchannel/views/checkins/list/job');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/list/store'],

        events: {
            "click .closed:not(.expansions)": "showJobs",
            "click .open:not(.expansions)": "hideJobs"
        },

        render: function() {
            if (window.bootstrap) {
              this.model.set('canViewSalesData', window.bootstrap.canViewSalesData);
              this.model.set('canEnableGeolocation', window.bootstrap.canEnableGeolocation);
            }
            this.$el.html(this.template(this.model.toJSON()));
            this.$body = this.$('.subsection .card');
            this.$expander = this.$('.expander');
            this.$expansions = this.$('.expansions');
            this.$indicator = this.$('.indicator .ic');
            _.chain(this.model.get('jobs')).groupBy('date').each(function(jobs, date) {
                this.$body.append(
                    new JobView({
                        model: {
                            title: (date == 'null') ? '' : date,
                            collection: jobs,
                            canEnableGeolocation: this.model.attributes.canEnableGeolocation
                        }
                    }).render().el);
            }, this);

            return this;
        },

        showJobs: function() {
            this.$expander.removeClass('closed').addClass('open');
            this.$indicator.removeClass('ic_down').addClass('ic_up');
            this.$expansions.slideDown();
        },

        hideJobs: function() {
            this.$expander.removeClass('open').addClass('closed');
            this.$indicator.removeClass('ic_up').addClass('ic_down');
            this.$expansions.slideUp();
        }

    });
});
