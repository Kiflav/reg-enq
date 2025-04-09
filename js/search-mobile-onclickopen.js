// search-mobile-onclickopen
(function($) {
	$(function() {
  $("#searchlink .fa-close").hide();
  $('.searchtoggle').click(function() {
      if($("#searchlink").hasClass('open')) {
        $("#searchlink").removeClass('open');
        $("#searchlink .fa-close").hide();
        $("#searchlink .fa-search").show();
      } else {
        $("#searchlink").addClass('open');
        $("#searchlink .fa-close").show();
        $("#searchlink .fa-search").hide();
        $("#searchText").focus();
      }
  });
	});
})(jQuery)