define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        ProgramListView = require('stores/views/programs/list'),
        ProgramStores = require('stores/collections/program_stores'),
        ProgramStoresModule = require('stores/views/program_stores/list_main'),
        Account = require('stores/models/account'),
        Accounts = require('stores/collections/accounts'),
        AccountListView = require('stores/views/accounts/list'),
        AccountNewView = require('stores/views/accounts/new'),
        Uploads = require('stores/collections/uploads'),
        UploadListView = require('stores/views/uploads/list'),
        Upload = require('stores/models/upload'),
        UploadView = require('stores/views/uploads/show');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        container: $('#application'),
        currentView: null,

        routes: {
            '(/)': 'programList',
            'accounts(/)': 'accountList',
            'accounts/new(/)': 'accountNew',
            'programs/:programId(/)': 'storeList',
            'programs/:programId/uploads(/)': 'uploadList',
            'programs/:programId/uploads/new': 'uploadNew',
            'programs/:programId/uploads/:uploadId': 'uploadResults'
        },

        programList: function() {
            var view = new ProgramListView({collection: context.programs});
            this.swap(view);
        },

        accountList: function() {
            var self = this,
                accounts = new Accounts();
            accounts.fetch().done(function() {
                var view = new AccountListView({collection: accounts});
                self.swap(view);
            });
        },

        accountNew: function() {
            var account = new Account();
            var view = new AccountNewView({model: account});
            this.swap(view);
        },

        storeList: function(programId) {
            var program = context.programs.get(programId);
            var programStores = new ProgramStores([], {program: program});

            var programStoreModule = new ProgramStoresModule({program: program, programStores: programStores});

            this.swap(programStoreModule);

            //context.trigger('filter:toggle'); // and this doesn't work...
        },

        uploadNew: function(programId) { /* NOOP */ },

        uploadList: function(programId) {
            var program = context.programs.get(programId);
            var uploads = new Uploads([], {program: program});

            var view = new UploadListView({model: program, collection: uploads});

            var self = this;
            uploads.fetch({reset: true}).done(function() {
                self.swap(view);
            });
        },

        uploadResults: function(programId, uploadId) {
            var program = context.programs.get(programId);
            var upload = new Upload({id: uploadId, programId: program.get('id')});

            var self = this,
                view = new UploadView({model: upload});

            upload.fetch().done(function(data) {
                upload.set(data);
                self.swap(view);
            });
        },

        swap: function(view) {
            if(this.currentView) {
                if(this.currentView.leave) {
                    this.currentView.leave();
                } else {
                    this.currentView.remove();
                }
            }
            this.currentView = view;
            this.container.html(view.render().el);
        }
    });

    var initialize = function() {
        namespacer('stores');
        if(window.bootstrap && window.bootstrap.programs) {
            context.programs = new Backbone.Collection(window.bootstrap.programs);
        }
        context.router = new AppRouter();
        Backbone.history.start({pushState: true, hashChange: false});
        MainLayout.init();
    };

    return {
        initialize: initialize
    };
});