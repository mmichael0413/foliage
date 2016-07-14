define(function(require){
    var Backbone = require('backbone');

    // Sole purpose of this thing is to watch for report links, then append the current search string
    return Backbone.View.extend({
        el: "#reportsDropdown",

        events: {
            'click a.report': 'activate'
        },
        activate: function(e) {
            e.currentTarget.href = e.currentTarget.href+window.location.search;
        }
    });
});