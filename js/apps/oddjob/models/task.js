define(function(require) {
    return require('backbone').Model.extend({
        defaults: {
            payable: true,
            billable: true,
            required: true,
            paymentRate: 1500,
            expectedDuration: 60
        }
    });
});