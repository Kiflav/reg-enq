(function($) {
$(document).ready(function() {
	var urlParts = window.location.hash.split('#panel');
	if (urlParts[1]) {
		var anchor = urlParts[1];

		// open the answer for the selected question
		var currentAnswer = "#panel" + anchor + " #answer" + anchor;
		$(currentAnswer).collapse('show');

		// scroll to have the question below the menu
		$('html, body').animate({
			  scrollTop: $(window.location.hash).offset().top - 68
		 });
	}
});

})(jQuery)