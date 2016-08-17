define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        context = require('context'),
        HandleBarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'expandable pure-g',
        events: {
            "click .open": "opensubsection",
            "click .close": "closesubsection"
        },
        initialize: function(options) {
            this.hide_toggle = options.hide_toggle;
        },
        render: function() {
            this.$el.html(HandleBarsTemplates['thirdchannel/checkins/expandable']({
                store_details: this.model.store_details,
                toggle: this.openText + "&nbsp;<i class='ic ic_down'></i>",
                hide_toggle: this.hide_toggle,
            }));
            this.main = this.$("> .main");
            this.main.html(HandleBarsTemplates[this.rowTemplate](this.model));
            this.subsection = this.$("> .subsection");
            this.toggle = this.$("> .toggle");
            if(this.model.pre_expand){
               this.opensubsection();
            }
            return this;
        },
        opensubsection: function(e){
            if(e){
                e.preventDefault();
            }
            this.toggle.removeClass('open');
            this.toggle.html(this.closeText + "&nbsp;<i class='ic ic_up'></i>");
            this.toggle.addClass('close');

            this.main.removeClass('open');
            this.main.addClass('close');

            if(!this.expanded){
                this.expanded = true;
                this.fillsubsection();
            }
            if(this.model.pre_expand){
                this.model.pre_expand = false;
                this.subsection.show();
            } else {
                this.subsection.slideDown();
            }
        },
        closesubsection: function(e){
            if(e){
                e.preventDefault();
            }
            this.toggle.removeClass('close');
            this.toggle.html(this.openText + "&nbsp;<i class='ic ic_down'></i>");
            this.toggle.addClass('open');
            this.subsection.slideUp();
            this.main.removeClass('close');
            this.main.addClass('open');
        },
        fillsubsection: function(){},
        rowTemplate: "",
        openText: "",
        closeText: ""
    });
});
