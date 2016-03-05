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
        initialize: function(){
            console.log(this.model);
            this.listenTo(this, 'subsection:open', this.opensubsection);
        },
        render: function() {
            this.$el.html(HandleBarsTemplates['thirdchannel/checkins/expandable']({
                toggle: this.openText + "&nbsp;<i class='ic ic_down'></i>",
                hide_toggle: this.model.hide_toggle,
            }));
            this.main = this.$el.find(".main");
            this.main.html(HandleBarsTemplates[this.template](this.model));
            this.subsection = this.$el.find(".subsection");
            this.toggle = this.$el.find(".toggle");
            if(this.model.preexpand){
               this.trigger("subsection:open");
            }
            return this;
        },
        opensubsection: function(e){
            this.toggle.removeClass('open');
            this.toggle.html(this.closeText + "&nbsp;<i class='ic ic_up'></i>");
            this.toggle.addClass('close');
            if(!this.expanded){
                this.expanded = true;
                this.fillsubsection();
            }
            if(this.model.preexpand){
                this.subsection.show();
            } else {
                this.subsection.slideDown();
            }
        },
        closesubsection: function(e){
            this.toggle.removeClass('close');
            this.toggle.html(this.openText + "&nbsp;<i class='ic ic_down'></i>");
            this.toggle.addClass('open');
            this.subsection.slideUp();
        },
        fillsubsection: function(){},
        template: "",
        openText: "",
        closeText: ""
    });
});
