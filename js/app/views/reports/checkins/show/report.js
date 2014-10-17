define(function(require) {
    var Backbone = require('backbone'),
        SectionView = require('app/views/reports/checkins/show/section');

    return Backbone.View.extend({
        el: ".checkin-report",
        initialize: function (options) {
        },
        render: function (options) {
            this.$el.find('.section').each(function(){
                new SectionView({el: this}).render();
            });

            return this;
        }
    });
});