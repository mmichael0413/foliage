define(function (require) {
	var Backbone = require('backbone'),
		/**
		 * 
		 * 
		 * @exports 'pennyPacker/models/entry'
		 */
		EntryModel = Backbone.Model.extend({
			parse: function (data) {
				if (data.items) {
					return data.items[0];
				} else {
					return data;
				}

			},
			url: function () {
				return this.get('links').self;
			},
            createTravel: function(opts) {
                var options = {
                    url: "/program/" + this.get('program').id + "/travel/create/" + this.id,
                    type: 'POST'
                };

                _.extend(options, opts);

                console.log(options);

                return Backbone.sync.call(this, null, this, options);
            }
		});
	return EntryModel;
});