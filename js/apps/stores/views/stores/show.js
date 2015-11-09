define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Noty = require('noty'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        GMap = require('async!https://maps.googleapis.com/maps/api/js'),
        GeocodeCollection = require('stores/collections/geocodes'),
        GeocodeListView = require('stores/views/stores/geocode_list');

    var View = Backbone.View.extend({
        template: Templates['stores/stores/show'],

        loadingHTML: "<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>",

        events: {
            'click .geocode': 'reprocessGeocode',
            'click .edit-address': 'editAddress'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'renderDetails', 'renderMap');

            this.isEditingAddress = false;

            this.geocodes = new GeocodeCollection([], {store: this.model});
            this.geocodeListView = new GeocodeListView({collection: this.geocodes});

            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.renderDetails();
            this.renderMap();
            return this;
        },

        renderDetails: function() {
            this.$el.html(this.template(this.model.attributes));
        },

        renderMap: function() {
            var latLng = new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'));
            var map = new google.maps.Map(this.$('#map')[0], {
                center: latLng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            new google.maps.Marker({
                position: latLng,
                map: map
            });
        },

        editAddress: function(e) {
            e.preventDefault();
            this.isEditingAddress = false;

            this.cancelEditAddress(e);
        },

        cancelEditAddress: function(e) {
            e.preventDefault();
            this.isEditingAddress = false;
            this.renderDetails();
        },

        reprocessGeocode: function(e) {
            e.preventDefault();
            this.geocodeListView.setElement(this.$('#geocode-list'));
            this.$('#geocode-list').html(this.loadingHTML);
            this.geocodes.fetch({reset: true})
                .fail(function() {
                    noty({
                        layout: 'top',
                        theme: 'relax',
                        text: 'Failed to retrieve geocodes for ' + this.model.get('name'),
                        type: 'error',
                        animation: {
                            open: {height: 'toggle'},
                            close: {height: 'toggle'},
                            easing: 'swing',
                            speed: 500
                        },
                        timeout: 2500
                    });
                }.bind(this));
        }
    });

    return View;
});