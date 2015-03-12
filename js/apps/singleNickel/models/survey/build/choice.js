define(function(require){
    var Backbone = require('backbone'),
        BackboneValidation = require('backboneValidation');
        
    return Backbone.Model.extend({
        type:  "choice",
        templates: {
            edit: "editChoice",
            show: "showChoice"
        },
        lookUps: {
            triggers: {
                true: "Yes",
                false: "No"
            }
        },
        validation: {
            title: [{
                required: true
            },{
                minLength: 2,
                msg: "The name is too short, please enter at name with at least 2 characters"
            },{
                maxLength: 255,
                msg: "The name is too long, please enter at name with at most 255 characters"
            }],
            triggers: {
                required: true
            }
        }
    });
});