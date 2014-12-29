define(function (require) {
    var EntryRowView = require('pennyPacker/views/entry/row'),
        DirectDetailsView = require('pennyPacker/views/entry/directDetails'),
        /**
         * Represents a Direct payment / adjustment Row
         * 
         * @type {View}
         * @exports 'pennyPacker/views/entry/direct'
         */
        DirectView = {
            className: 'item entry direct',
            template: 'pennyPacker/entry/direct',
            subViewClass: DirectDetailsView,
            decorate: function () {
                if (this.model.get('payment').substr(0,1) != "-") {
                    this.$el.addClass('positive');
                }
            }
        };

    return EntryRowView.extend(DirectView);
});