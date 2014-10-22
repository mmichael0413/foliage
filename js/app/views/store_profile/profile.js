define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        templates = require('handlebarsTemplates'),
        context = require('context'),

        /**
         * The Store Profile View wraps the #profile section and assists in rendering the profile json data
         * 
         * @exports app/views/store_profile/profile
         */
        StoreProfileSectionView =   {
            el: "#profile",

            initialize: function () {
                this.model = new (Backbone.Model.extend({
                    url: function () {
                        return context.profile.links.self;
                    }
                }))();
            },

            render: function () {
                var self = this;
                this.$tbody = this.$el.find('tbody');
                this.model.fetch()
                    .then(function (model) {
                        self.questions = new Backbone.Collection(model.questions);
                        self.answers = new Backbone.Collection(model.answers);
                    })
                    .done(function () {
                        var data = self.buildDataRows();
                        self.$tbody.html(templates['store_profile/profile_rows'](data));
                    })
                    .fail(function () {
                        self.$tbody.html('<tr><td>No Store Profile exists for this Store. <a href="#">Please, complete it!</a></td></tr>');
                    });
            },

            buildDataRows: function () {
                var data = {rows: []},
                    self = this;
                    
                this.questions.each(function (question) {
                    var item = question.toJSON();
                    //console.log({survey_question_id: question.get('id')});
                    item.answers = [];
                    _.each(self.answers.where({survey_question_id: question.get('id')}), function (model) {
                        item.answers.push(model.get('text_answer'));
                    });
                    
                    data.rows.push(item);
                });
                return data;
            }
        };

    return Backbone.View.extend(StoreProfileSectionView);
});