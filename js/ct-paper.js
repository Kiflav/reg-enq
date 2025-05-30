+function ($) {
var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function(){
    window_width = $(window).width();
    

    // Activate Morpghing Buttons 
    $('[data-toggle="morphing"]').each(function () {
          $(this).morphingButton();
    });
     
    //  Activate the tooltips   
    $('[rel="tooltip"]').tooltip();

    //      Activate the switches with icons 
    if($('.switch').length != 0){
        $('.switch')['bootstrapSwitch']();
    }  
    //      Activate regular switches
    if($("[data-toggle='switch']").length != 0){
         $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();     
    }
    
    //    Activate bootstrap-select
    if($(".selectpicker").length != 0){
        $(".selectpicker").selectpicker();    
    }   
    
    if($(".tagsinput").length != 0){
        $(".tagsinput").tagsInput();    
    }

/*
    if($('.datepicker').length != 0){
        $('.datepicker').datepicker({
             weekStart:1,
             color: '{color}'
         });    
    }
  */   
      
    $('.btn-tooltip').tooltip();
    $('.label-tooltip').tooltip();
    
	// Carousel
	$('.carousel').carousel({
      interval: 4000
    });
    
    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });
    
    
     // Make the images from the card fill the hole space
    gsdk.fitBackgroundForCards();

    // Init icon search action for the navbar
    gsdk.initNavbarSearch();
    
    // Init popovers 
    gsdk.initPopovers();
    
    // Init Collapse Areas
    gsdk.initCollapseArea();
    
    // Init Sliders
    gsdk.initSliders();
    
    //  Init video card actions
    gsdk.initVideoCards();
      
});


    
gsdk = {
    misc:{
        navbar_menu_visible: 0
    },
    
    checkScrollForTransparentNavbar: debounce(function() {	
        	if($(document).scrollTop() > 260 ) {
                if(transparent) {
                    transparent = false;
                    $('nav[role="navigation"]').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('nav[role="navigation"]').addClass('navbar-transparent');
                }
            }
    }, 17),
    
    fitBackgroundForCards: function(){
         $('.card').each(function(){
            if(!$(this).hasClass('card-product') && !$(this).hasClass('card-user')){
                image = $(this).find('.image img');
                
                image.hide();
                image_src = image.attr('src');
                
                $(this).find('.image').css({
                    "background-image": "url('" + image_src + "')",
                    "background-position": "center center",
                    "background-size": "cover"
                });
            }
        });
    },
    initPopovers: function(){
        if($('[data-toggle="popover"]').length != 0){
            $('body').append('<div class="popover-filter"></div>');
    
            //    Activate Popovers
           $('[data-toggle="popover"]').popover().on('show.bs.popover', function () {                        
                $('.popover-filter').click(function(){
                    $(this).removeClass('in');
                    $('[data-toggle="popover"]').popover('hide');         
                });
                $('.popover-filter').addClass('in');
            }).on('hide.bs.popover', function(){
                $('.popover-filter').removeClass('in');                   
            }); 
    
        }
    },
    initCollapseArea: function(){
    	
        $('[data-toggle="gsdk-collapse"]').each(function () {
            var thisdiv = $(this).attr("data-target");
            $(thisdiv).addClass("gsdk-collapse");
        });
    
        $('[data-toggle="gsdk-collapse"]').hover(function(){
            var thisdiv = $(this).attr("data-target");
            if(!$(this).hasClass('state-open')){
                $(this).addClass('state-hover');                
                $(thisdiv).css({
                    'height':'30px'
                });    
            }
            
        },
        function(){
            var thisdiv = $(this).attr("data-target");
            $(this).removeClass('state-hover');
            
            if(!$(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px'
                });     
            }          
        }).click(function(event){
                event.preventDefault();
                            
                var thisdiv = $(this).attr("data-target");
                var height = $(thisdiv).children('.panel-body').height();
                
                if($(this).hasClass('state-open')){
                    $(thisdiv).css({
                        'height':'0px',
                    }); 
                    $(this).removeClass('state-open');    
                } else {
                    $(thisdiv).css({
                        'height':height + 30,
                    }); 
                    $(this).addClass('state-open');
                }
            });
    },
    initSliders: function(){
        // Sliders for demo purpose in refine cards section
        if($('#slider-range').length != 0){
            $( "#slider-range" ).slider({
        		range: true,
        		min: 0,
        		max: 500,
        		values: [ 75, 300 ],
        	});
        }
        if($('#refine-price-range').length != 0){
        	 $( "#refine-price-range" ).slider({
        		range: true,
        		min: 0,
        		max: 999,
        		values: [ 100, 850 ],
        		slide: function( event, ui ) {
        		    min_price = ui.values[0];
        		    max_price = ui.values[1];
            		$(this).siblings('.price-left').html('&euro; ' + min_price);
            		$(this).siblings('.price-right').html('&euro; ' + max_price)
        		}
        	});
        }
        if($('#slider-default').length != 0 || $('#slider-default2').length != 0){
        	$( "#slider-default, #slider-default2" ).slider({
        			value: 70,
        			orientation: "horizontal",
        			range: "min",
        			animate: true
        	});
        }
    },
    initVideoCards: function(){
        $('[data-toggle="video"]').click(function(){
            id_video = $(this).data('video');
            video = $('#' + id_video).get(0);
            
            card_parent = $(this).closest('.card');
            
            if(video.paused){
                video.play();
                $(this).html('<i class="fa fa-pause"></i> Pause');
                card_parent.addClass('state-play');
            } else {
                video.pause();
                $(this).html('<i class="fa fa-play"></i> Play');
                card_parent.removeClass('state-play');
            }
        });
    },
    initNavbarSearch: function(){        
        $('[data-toggle="search"]').click(function(){
            if(searchVisible == 0){
                searchVisible = 1;
                $(this).parent().addClass('active');
                $('.navbar-search-form').fadeIn(function(){
                    $('.navbar-search-form input').focus();
                });
            } else {
                searchVisible = 0;
                $(this).parent().removeClass('active');
                $(this).blur();
                $('.navbar-search-form').fadeOut(function(){
                    $('.navbar-search-form input').blur();
                });
            } 
        });
    }
}

examples = {
    initContactUsMap: function(){
        var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
        var mapOptions = {
          zoom: 14,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        }
        var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        
        // To add the marker to the map, call setMap();
        marker.setMap(map);
        }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
}(jQuery);









// new menu
+function ($) {
	$(document).ready(function(){	
		$navbar = $('nav').find('.navbar-collapse').first().clone(true);
		$navbar.css('min-height', window.screen.height);
		$navbar.addClass("navbar-collapse-responsive scrollable");
		
		ul_content = '';
		
		$navbar.children('ul').each(function(){
		   content_buff = $(this).html();
		   ul_content = ul_content + content_buff;   
		});
		ul_content = ul_content.replace(/<div class="col-sm-3 align-left-menu">|<div class="col-sm-4 align-left-menu">|<div class="col-sm-12 align-left-menu">|<\/div>|align-left-menu/g, "");
		ul_content = '<div><ul class="nav navbar-nav">' + ul_content + '</ul></div>';
		
		$navbar.html(ul_content);
		$navbar.find('a').removeClass('btn btn-round btn-default');
		$('body').append($navbar);
		
		background_image = $navbar.data('nav-image');
        if(background_image != undefined){
        	
           $navbar.css('background',"url('" + background_image + "')")
                  .removeAttr('data-nav-image')
                  .css('background-size',"cover")
                  .addClass('has-image');                
        }
        $(document).click(function(e){
        	var target = $(e.target);
			if($("html").hasClass("nav-open")){			
				if(target.parents(".navbar-collapse-responsive").length === 0 && !target.hasClass("navbar-collapse-responsive")){
					$("html").removeClass("nav-open");
				}
			}else if(target.hasClass("icon-bar") || target.hasClass("navbar-toggle")){
				$("html").addClass("nav-open");
			}else{
				$("html").removeClass("nav-open");
			}
		});


	});
}(jQuery);