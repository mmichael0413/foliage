define(function(require){

    var $ = require('jquery'),
        Handlebars = require('handlebars');

    Handlebars.registerHelper('if_eq', function(a, b, opts) {
        if(a == b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('if_gt', function(a, b, opts) {
        if(a > b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('if_lt', function(a, b, opts) {
        if(a < b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('pluralize', function(number, single, plural) {
        return (number === 1) ? single : plural;
    });

    Handlebars.registerHelper('print_bool', function(a) {
        if(a)
            return 'true';
        else
            return 'false';
    });

    Handlebars.registerHelper('value_lookup', function(key, object) {
        return object[key];
    });

    Handlebars.registerHelper('threshold_class', function(threshold, key, object) {
        return (Number(threshold) <= Number(object[key])) ? "positive": "negative";
    });

    Handlebars.registerHelper('eachRange', function(from, to, object, block) {
        var ret = '';
        for(var i = from; i < to; i++) {
            ret += block.fn(object[i]);
        }
        return ret;
    });

    Handlebars.registerHelper('if_present', function(object, block) {
        return (object === undefined) ? '' : block.fn(this);
    });

    Handlebars.registerHelper('format_number', function(object) {
        return object.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

    Handlebars.registerHelper('format_number_from_value_lookup', function(key, object) {
        if(object[key]) {
            return object[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });

});

