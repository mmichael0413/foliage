define(function(require) {
   return {
        selectAll: function () {
            this._check(true);
        },

        deselectAll: function () {
            this._check(false);
        },

        _check: function (value) {
            var $checkboxes = this.$el.find("input[type='checkbox']"),
                uuids = _.map($checkboxes, function(checkbox) {
                  return checkbox.value;  
                });
            $checkboxes.prop('checked', value);
            // the store uuids store should listen for this
            context.trigger('stores:uuids:' + value, uuids);
        }
   };
});