(function($) {
$(document).ready(function() {

// Method 1
var isTouchDevice =
    (('ontouchstart' in window) ||
    (navigator.MaxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
if(!isTouchDevice) {
    document.getElementById('outputfb').value = false;
    //console.log('is not touch');
}else {
    document.getElementById('outputfb').value = true;
    //console.log('is touch');
}

});
})(jQuery)
