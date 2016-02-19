$(document).ready(function () {
    
    // preloader
    
    $(window).load(function() {
      $('body').addClass('ready');
    });
    
    // fullPage slider on index page
    
    var SCROLLING_SPEED = 0;
    $('#fullpage').fullpage({
        'verticalCentered': false,
        navigation: true,
        navigationPosition: 'nav-slider',
        fixedElements: '#header, #footer',
        easing: 'swing',
        
        scrollingSpeed: SCROLLING_SPEED,
        
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            $.fn.fullpage.setScrollingSpeed(0);
        },
      
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
        },
    });
    
    
});