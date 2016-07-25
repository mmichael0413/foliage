define(function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        Handlebars = require('handlebars');

    Handlebars.registerHelper('if_eq', function (a, b, opts) {
        if (a == b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('unless_eq', function (a, b, opts) {
        if (a != b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('contains', function (value, array, opts) {
        if ($.inArray(value, array) >= 0)
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('if_activity', function (a, opts) {
        if (_.contains(['message', 'checkin'], a))
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('if_gt', function (a, b, opts) {
        if (a > b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('if_lt', function (a, b, opts) {
        if (a < b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper('pluralize', function (number, single, plural) {
        return (number === 1) ? single : plural;
    });

    Handlebars.registerHelper('print_bool', function (a) {
        if (a)
            return 'true';
        else
            return 'false';
    });

    Handlebars.registerHelper('value_lookup', function (key, object) {
        return object[key];
    });

    Handlebars.registerHelper('collection_get', function (id, collection, opts) {
        return opts.fn(collection.get(id));
    });

    Handlebars.registerHelper('model_get', function (attr, model) {
        return model.get(attr);
    });

    Handlebars.registerHelper('threshold_class', function (threshold, key, object) {
        return (Number(threshold) <= Number(object[key])) ? "positive" : "negative";
    });

    Handlebars.registerHelper('eachRange', function (from, to, object, block) {
        var ret = '';
        for (var i = from; i < to; i++) {
            ret += block.fn(object[i]);
        }
        return ret;
    });

    /*
        Use with {{@index}} to increment the @index in order to start with 1
     */
    Handlebars.registerHelper("index_inc", function (value, options){
        return parseInt(value, 10) + 1;
    });

    Handlebars.registerHelper('if_present', function (object, block) {
        return (object === undefined) ? '' : block.fn(this);
    });

    Handlebars.registerHelper('format_number', function (object) {
        return object.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

    Handlebars.registerHelper('format_number_from_value_lookup', function (key, object) {
        if (object[key]) {
            return object[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });

    Handlebars.registerHelper('partial', function (name, context, opts) {
        name = name.replace(/\//g, '_');
        var f = Handlebars.partials[name];
        if (!f) {
            return "Partial not loaded";
        }
        return new Handlebars.SafeString(f(context));
    });

    Handlebars.registerHelper('select', function (value, options) {
        var $el = $('<select />').html(options.fn(this));
        $el.find('[value="' + value + '"]').attr({'selected': 'selected'});
        return $el.html();
    });

    Handlebars.registerHelper('lockDisplay', function (locked) {
        if (locked) {
            return 'Unlock';
        } else {
            return 'Lock';
        }
    });

    Handlebars.registerHelper('lockActionIconClass', function (locked) {
        if (locked) {
            return 'ic_unlock';
        } else {
            return 'ic_lock';
        }
    });

    Handlebars.registerHelper('for', function (from, to, incr, block) {
        var accum = '';
        for (var i = from; i < to; i += incr)
            accum += block.fn(i);
        return accum;
    });

    Handlebars.registerHelper('formatSalesDollarValue', function(val) {
        if(val === undefined || val === null) {
            return 'N/A';
        } else {
            var c = parseFloat(val === 0 ? 0 : val / 100).toFixed(2);
            return '$' + c.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    });

    Handlebars.registerHelper('formatSalesValue', function(val) {
        if(val === undefined || val === null) {
            return 'N/A';
        } else {
            return val;
        }
    });

    Handlebars.registerHelper('formatPercentageChange', function(change) {
        if(change === undefined || change === null) {
            return 'N/A';
        } else {
            return Math.abs(parseFloat(change)).toFixed(2) + '%';
        }
    });

    Handlebars.registerHelper('percentageChangeClass', function(change) {
        if(change !== undefined && change !== null) {
            if(change > 0) {
                return 'positive';
            } else {
                return 'negative';
            }
        }
    });

    Handlebars.registerHelper('percentageChangeIcon', function(change) {
        if (change !== undefined && change !== null) {
            if (change > 0) {
                return 'ic_up';
            } else if (change < 0) {
                return 'ic_down';
            }
        }
    });

    Handlebars.registerHelper('formatTimestamp', function(timestamp, locale) {
        if(locale === undefined) {
            locale = 'en-US';
        }
        var date = new Date(timestamp);
        return date.toLocaleTimeString(locale, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    });

    Handlebars.registerHelper('formatSecondsToDate', function(seconds, locale) {
        if(locale === undefined) {
            locale = 'en-US';
        }
        var date = new Date(1970,0,1);
            date.setSeconds(seconds);

        var offset = date.getTimezoneOffset()  / 60;
        var hours = date.getHours();

        date.setHours(hours - offset);
        return date.toLocaleTimeString(locale, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short"
        });
    });

    Handlebars.registerHelper('similarAccountClass', function(similarity) {
        if(similarity === 1) {
            return 'match';
        } else {
            return '';
        }
    });

    Handlebars.registerHelper('displayPercentage', function(value) {
        if(value === undefined || value === null) {
            return 'N/A';
        }
        value = Math.round(value * 100.0);
        return value + '%';
    });

    Handlebars.registerHelper("highlight", function (text, mentionedUsers, currentUserId, options) {
        var highlightMatcher = new RegExp(/@(\w+\s{1,3}\w+)(?:\sAgents)?\s\[[^\[\t\n\r\]]+\]/g); // allow for 1-3 spaces between first, last
        var mentions = [];
        var names = [];

        var userNameIdMap = {};
        for(var i = 0; i < mentionedUsers.length; i++) {
            userNameIdMap[mentionedUsers[i].user_name] = mentionedUsers[i].user_id;
        }


        var match;
        do {
            match =  highlightMatcher.exec(text);
            if (match) {
                mentions.push(match[0]);
                names.push(match[1]);
            }
        } while (match);

        for(i = 0; i < mentions.length; i++) {
            var mentionLink = $(document.createElement('a'))
                .addClass('highlight');

            if (userNameIdMap[names[i]]) {
                mentionLink.attr('href', '/programs/Merchandising/profiles/'+userNameIdMap[names[i]]);
            } else {
                mentionLink.addClass('highlightNoLink');
            }
            if (userNameIdMap[names[i]] && userNameIdMap[names[i]] == currentUserId) {
                mentionLink.addClass('highlightWord');
            }
            mentionLink.html(mentions[i]);
            text = text.replace(mentions[i], mentionLink[0].outerHTML);
        }
        return new Handlebars.SafeString(text);
    });
});

