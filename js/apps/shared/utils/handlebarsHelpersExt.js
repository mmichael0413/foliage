define(function (require) {

    var moment = require ('moment'),
        Handlebars = require('handlebars');

    Handlebars.registerHelper('localizedUTCDate', function(iso8601Date){
        if(iso8601Date){
            return moment.utc(iso8601Date).format("l");
        } else {
            return "";
        }
    });
});

