describe("StringUtils test", function() {

	describe("Reverse function", function() {
		it("should reverse string correctly", function() {
			var SAMPLE_INPUT = 'abcd';
			var EXPECTED_OUTPUT = 'dcba';

			expect(StringUtils.reverseString(SAMPLE_INPUT)).toBe(EXPECTED_OUTPUT);
		});
	});

	describe("Palindrome function", function() {
		var PALINDROME = 'kayak';
		var NOT_PALINDROME = 'canoe';

		it("should detect palindromes", function() {
			expect(StringUtils.isPalindrome(PALINDROME)).toBe(true);
		});

		it("should detect words that are not palindromes", function() {
			expect(StringUtils.isPalindrome(NOT_PALINDROME)).toBe(false);
		});
	});

});