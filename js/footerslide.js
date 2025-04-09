(function($) {
$(document).ready(function() {
$("#footertrigger").click(function () {
	if($(".footerslide").height() > 510)
	{
		$(".footerslide").animate({height: 50});
		$("#footer-icon-min").hide();
		$("#footer-icon-plus").show();
	}
	else
	{
		$(".footerslide").animate({height: 610});
		$("#footer-icon-min").show();
		$("#footer-icon-plus").hide();
	}
}); 


$(document).mouseup(function (e)
{
    var container = $(".footerslide");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        	if($(".footerslide").height() > 510)
			{
				$(".footerslide").animate({height: 50});
				$("#footer-icon-min").hide();
				$("#footer-icon-plus").show();
			}

    }
});
});
})(jQuery)