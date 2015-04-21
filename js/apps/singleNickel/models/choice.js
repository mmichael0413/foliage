define(function(require){
    var BaseModel = require('singleNickel/models/base');
        
    return BaseModel.extend({
        id: '',
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
            choice: [{
                required: true,
                message: "Required"
            },{
                minLength: 2,
                message: "The name is too short, please enter at name with at least 2 characters"
            },{
                maxLength: 255,
                message: "The name is too long, please enter at name with at most 255 characters"
            }],
            triggers: {
                required: true,
                message: "Required"
            }
        },
        defaults: {
            triggers: false
        }
    });
});