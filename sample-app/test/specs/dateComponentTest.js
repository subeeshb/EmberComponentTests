describe("Date component", function() {

	beforeEach(function() {
		ComponentTestingUtils.setup();
	});

	afterEach(function() {
		ComponentTestingUtils.cleanup();
	});

	it("should calculate days correctly", function() {

		var TEST_DATE_INPUT = '14-05-2019';
		var EXPECTED_OUTPUT = 'Tuesday';

		ComponentTestingUtils.setupComponentForTesting('date-field', TestApp.DateFieldComponent, function() {
			$('.date-value-input').val(TEST_DATE_INPUT).keyup();
			expect($('div.day-of-week').text()).toBe(EXPECTED_OUTPUT);
		});
		
	});

});