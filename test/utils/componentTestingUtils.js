var ComponentTestingUtils = {

	App: {},
	container: null,

	getComponentName: function(componentController) {
		return componentController.toString().split('.').slice(-1);
	},

	setupComponentForTesting: function(componentTemplateName, componentController, callback) {
		$('body').append('<div id="test-fixture"></div>');
		var componentName = this.getComponentName(componentController);

		Ember.TEMPLATES.application = Ember.Handlebars.compile("<div>{{outlet componentContainer}}</div>");
		Ember.TEMPLATES.componentContainer = Ember.Handlebars.compile("{{"+componentTemplateName+"}}");


		Ember.run(function() {
	    App = Ember.Application.create({
	      name: 'App',
	      rootElement: '#test-fixture'
	    });

	    App[componentName]= componentController.extend({});

	    App.IndexRoute = Ember.Route.extend({

		    setupController: function (controller) {
		    },

		    renderTemplate: function () {
		    	console.log('render');
		        this.render('componentContainer', {
		            outlet: 'componentContainer'
		        });

		    }
		});

		App.IndexController = Ember.ObjectController.extend({
		});


	    App.deferReadiness();

	    App.Router = Ember.Router.extend({
	      location: 'none'
	    });

	    container = App.__container__;

	    container.register('component:'+componentTemplateName, App[componentName]);

	    
	  });


	  

	  var router = container.lookup('router:main');

	  Ember.run(App, 'advanceReadiness');
	  Ember.run(function() {
	    router.handleURL('/');

	    if (callback) { callback(); }
	  });
	}

};