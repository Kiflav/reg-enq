(function($) {
$(document).ready(function (){

 	$('input[id="terms"]').uniform();

	$('#navbar-collapse-1').hide();
	$('.responsive-toggle').click(function(){
		$('#navbar-collapse-1').toggle(500);
	});

	//Scroll down
    $("#goto-topnewbottom").click(function (){
	 $('html, body').animate({
	  scrollTop: $("#meedoen").offset().top - 80
	 }, 500);
	}); 
	
	function checkterms(){
	 if($("#terms").hasClass("t-error") && $("#uniform-terms span").hasClass("checked")){
		 $("#uniform-terms").removeClass("terms-error");
	 }else if($("#terms").hasClass("t-error")){
		 $("#uniform-terms").addClass("terms-error");
		 }
	}
	checkterms();
	$("#uniform-terms").click(function (){
		checkterms();
		});
	//Scroll up
	$(".qmark button").click(function (){
	 $('html, body').animate({
	  scrollTop: $(".container-payoffs").offset().top - 100
	 }, 2000);
	});
	
	$(".qmark-faq button").click(function (){
		 $('html, body').animate({
		  scrollTop: $(".payoff-anchor").offset().top - 70
		 }, 2000);
	});

	$(".qmark-faq-incentive.to-incentive-anchor button").click(function (){
		 $('html, body').animate({
		  scrollTop: $(".incentive-anchor").offset().top - 78
		 }, 1500);
	});
	
		
	//header-image switch//
	
	var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
	 $('#main-top').css({'background-image': 'url(images/redesign/' + images[Math.floor(Math.random() * images.length)] + ')'});

});
if ($('#errorDiv').is(':visible')) {
	$(".registratie-formulier").addClass("error-in-form");

} else {
$(".registratie-formulier").removeClass("error-in-form");

}
})(jQuery)
if (Prototype.BrowserFeatures.ElementExtensions) {
    var disablePrototypeJS = function (method, pluginsToDisable) {
            var handler = function (event) {
                event.target[method] = undefined;
                setTimeout(function () {
                    delete event.target[method];
                }, 0);
            };
            pluginsToDisable.each(function (plugin) { 
                jQuery(window).on(method + '.bs.' + plugin, handler);
            });
        },
        pluginsToDisable = ['collapse', 'dropdown', 'modal', 'tooltip', 'popover'];
    disablePrototypeJS('show', pluginsToDisable);
    disablePrototypeJS('hide', pluginsToDisable);
}
