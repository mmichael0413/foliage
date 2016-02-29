define(function(require){
    var Backbone = require('backbone');

    return Backbone.View.extend({
        el: "#jobs",
        initialize: function(){
            $(this.el).find(".expand-tasks").each(function(index,button){
                var job_uuid = button.id.replace(/expand-tasks-/,'');
                $(button).click(function(){
                    $("#tasks-"+job_uuid).slideDown();
                    $(button).hide();
                });
            });
        }
    });
});
