define(function (require) {

    var moment = require ('moment'),
        Handlebars = require('handlebars');

    Handlebars.registerHelper('localizedUTCDate', function(iso8601Date){
        if(iso8601Date){
            return moment.utc(iso8601Date).format("MMM DD, YYYY");
        } else {
            return "";
        }
    });

    Handlebars.registerHelper('dateFormat', function(date, format) {
        return moment(date).format(format);
    });
});

