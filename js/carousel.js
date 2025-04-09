(function(jq240624) {

	jq240624(document).ready(function(){
	    // Event for pushed the video
	    jq240624('#carousel-generic').carousel({
	        pause: true,
	        interval: 5000
	    });
	});
	jq240624(".carousel").swipe({
	
	  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
	
	    if (direction == 'left') jq240624(this).carousel('next');
	    if (direction == 'right') jq240624(this).carousel('prev');
	
	  },
	  allowPageScroll:"vertical"
	
	});	

})(jQuery);