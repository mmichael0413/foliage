define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        handlebarsTemplates = require('handlebarsTemplates'),
    component = {
        className: "filter-component",
        templateName: 'thirdchannel/filters/mono_component',

        checked: false,
        filterParam: null, // querystring param for the component
        label: null, // label to show next to the checkbox
        value: null, // value passed back under the param when checked
        linkText: null, // text for the link to the right of the label
        linkUrl: null,

        events: {
            "click .ic_check": "uncheck",
            "click .ic_blank": "check",
        },
        initialize: function (options) {
            var attrs = options.model.attributes;
            item = attrs.items[0];
            this.filterParam = attrs.name;
            this.label = item.name;
            this.value = item.value;
            this.linkText = item.linkText;
            this.linkUrl = item.linkUrl;
            this.render();
            this.listenTo(context, this.filterParam +':filter:clear', this.clear);
        },
        render: function () {
            var templateData = {
                checked: this.checked,
                label: this.label,
                value: this.value,
                filterParam: this.filterParam,
                linkText: this.linkText,
                linkUrl: this.linkUrl,
            };
            this.$el.html(handlebarsTemplates[this.templateName](templateData));
            context.trigger("filter:request");
            return this;
        },
        clear: function(){
            this.checked = false;
            this.render();
        },
        uncheck: function(){
            this.checked = false;
            this.render();
        },
        check: function(){
            this.checked = true;
            this.render();
        },
        addFilterByValue: function(value){
            if(this.value == value){
                this.checked=true;
            }
            this.render();
        },
    };
    return Backbone.View.extend(component);
});
