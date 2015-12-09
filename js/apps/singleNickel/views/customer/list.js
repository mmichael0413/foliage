define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ItemView = require('singleNickel/views/customer/list_item');

    return Backbone.View.extend({
        template: HandlebarsTemplates['singleNickel/customer/list'],
        initialize: function() {
            _.bindAll(this, 'renderCustomerItem');
            this.listenTo(this.collection, 'add', this.renderCustomerItem);
        },
        render: function() {
            this.$el.html(this.template());
            this.renderCustomers();
            return this;
        },
        renderCustomers: function() {
            if(this.collection.isEmpty()) {
                this.$('#customer-list-items').html('<tr><td colspan="2">No Customers</td></tr>');
            } else {
                this.collection.each(this.renderCustomerItem);
            }
        },
        renderCustomerItem: function(customer) {
            var itemView = new ItemView({model: customer});
            this.$('#customer-list-items').append(itemView.render().el);
        }
    });
});