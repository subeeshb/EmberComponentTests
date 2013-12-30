describe("Date component", function() {

	var App, container;

	var boot = function(callback) {
		$('body').append('<div id="test-fixture"></div>');

		Ember.TEMPLATES.application = Ember.Handlebars.compile("<div>{{outlet componentContainer}}</div>");
		Ember.TEMPLATES.componentContainer = Ember.Handlebars.compile("{{date-field}}");


		Ember.run(function() {
	    App = Ember.Application.create({
	      name: 'App',
	      rootElement: '#test-fixture'
	    });

	    App.DateFieldComponent = TestApp.DateFieldComponent.extend({});

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

	    container.register('component:date-field', App.DateFieldComponent);

	    
	  });


	  

	  var router = container.lookup('router:main');

	  Ember.run(App, 'advanceReadiness');
	  Ember.run(function() {
	    router.handleURL('/');

	    if (callback) { callback(); }
	  });
	};

	beforeEach(function() {

	});

	it("should calculate days correctly", function() {

		boot(function() {
			var TEST_DATE_INPUT = '14-05-2019';
			var EXPECTED_OUTPUT = 'Tuesday';


			$('.date-value-input').val(TEST_DATE_INPUT).keyup();;
			expect($('div.day-of-week').text()).toBe(EXPECTED_OUTPUT);
		});
		
	});

});