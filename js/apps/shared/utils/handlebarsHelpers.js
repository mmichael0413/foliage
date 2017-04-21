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
        if(typeof(value) === "object") {
            if(value) {
                var len = value.length;
                for(var i = 0; i < len; i++) {
                    var v = value[i];
                    $el.find('[value="' + v + '"]').attr({'selected': 'selected'});
                }
            }
        } else {
            $el.find('[value="' + value + '"]').attr({'selected': 'selected'});
        }
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
                return 'fa-angle-up';
            } else if (change < 0) {
                return 'fa-angle-down';
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

    Handlebars.registerHelper('formatSecondsToDateTime', function(seconds, locale) {
        if(locale === undefined) {
            locale = 'en-US';
        }
        var date = new Date(1970,0,1);
            date.setSeconds(seconds);

        var offset = date.getTimezoneOffset()  / 60;
        var hours = date.getHours();

        date.setHours(hours - offset);

        var dateString = date.toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric"
        }),

        timeString = date.toLocaleTimeString(locale, {
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short"
        });

        return dateString + ' at ' + timeString;
    });

    Handlebars.registerHelper('formatDateToLongDate', function(utcDate, locale) {
        if (locale === undefined) {
            locale = 'en-US';
        }

        var dateString = utcDate.split(" ")[0];
        var date = new Date(dateString);
        date.setDate(date.getDate() + 1);

        return date.toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric"
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

    Handlebars.registerHelper("highlight", function (text, mentionedUsers, currentUserId, highlightWords, options) {

        var pattern = "@("+
            mentionedUsers.map(function(mentionedUser) { return mentionedUser.user_name; })
                .concat(
                    highlightWords.map(function (highlightWord) {return highlightWord.replace('[', '\\[').replace(']', '\\]')})) // for now we only need to wory about brackets for @All brand Agents [Agent] case
                .join("|") + ")\\s*(?:\\[[^\\[\t\\n\\r\\]]+\\])?";
        var highlightMatcher = new RegExp(pattern, 'g');

        var mentions = [];
        var names = [];
        var highlightWordsHash = {};
        for (var i = 0; i < highlightWords.length; i++) {
            highlightWordsHash[highlightWords[i]] = highlightWords[i];
        }

        var userNameIdMap = {};
        for(i = 0; i < mentionedUsers.length; i++) {
            userNameIdMap[mentionedUsers[i].user_name] = mentionedUsers[i].user_id;
        }


        var match;
        do {
            match =  highlightMatcher.exec(text);
            if (match) {
                mentions.push(match[0]);
                names.push(match[1].slice(0, match[1].length));
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
            if ((userNameIdMap[names[i]] && userNameIdMap[names[i]] == currentUserId) || highlightWordsHash[mentions[i]]) {
                mentionLink.addClass('highlightWord');
            }
            mentionLink.html(mentions[i]);
            text = text.replace(mentions[i], mentionLink[0].outerHTML);
        }
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('round', function(value) {
        return Math.round(value);
    });

    Handlebars.registerHelper('trimActivitySummary', function(summary) {
      /**
        Agents want to be able to delineate sections of their summary with
        line breaks. We don't want them to add too many line breaks and
        cause unnecessary length to the activity feed, so trim any 4+
        line breaks to 3.
      **/
      return summary.replace(/\n\s*\n\s*\n/g, '\n\n');
    });

    Handlebars.registerHelper('capitalize', function(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    });
});
