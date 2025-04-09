(function($) {
$( document ).ready(function() {
     $(".meer").hide();   
    });
$('.bs-example-tooltips').children().each(function () {
    $(this).tooltip();
});
$('.bs-example-popovers').children().each(function () {
        $(this).popover();
});
$(document).on('click', '.menu-clix-verdienen .menu-more', function(e){	
	 $("#clix-verdienen .meer").toggle();
	 var textMr = $(text_more).html();
	 var textLs= $(text_less).html();
	 	if ($("#clix-verdienen .meer").css('display') == 'none') {				 		
	 		$(".menu-more").text(textMr).css('font-style', 'italic');
		  } else {			  
			$(".menu-more").text(textLs).css('font-style', 'italic');			
		}
	  	$(".menu-more").blur();
});
$(document).on('click', '.menu-clix-verdienen .dropdown-menu', function (e) {
        e.stopPropagation();
    });
$('#arrow-menu-1').css({
        position: "absolute",
        top:  "10px",
        left: "307px"
    });
})(jQuery)
function gotoLogin(url){
		var title = document.getElementsByTagName("title")[0].innerHTML;
		history.pushState("", title, location.href);
		window.location.replace(url);  
}
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