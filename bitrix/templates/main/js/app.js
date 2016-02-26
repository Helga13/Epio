$(document).ready(function () {
    
    // preloader
    
    $(window).load(function() {
      $('body').addClass('ready');
    });
    
    var timeout;
    
    timeout = setTimeout(function () {
            $('#fullpage').addClass('loaded');
        }, 3200);
 
    
    // fullPage slider on index page
    var SCROLLING_SPEED = 0;
    var countSliders = $('#fullpage').find('.section').length;
    
    $('#fullpage').fullpage({
       
        'verticalCentered': false,
        navigation: true,
        navigationPosition: 'nav-slider',
        fixedElements: '#header, #footer',
        easing: 'swing',
        css3: true,
        loopTop: true,
        loopBottom: true,
        scrollingSpeed: SCROLLING_SPEED,
        afterRender: function() {
            $('.nav-slider').prepend('<div class="js-nav-curent">01</div>');
            
        },
        afterLoad:function(link,index) {
            $('.section .slider-content').fadeIn(1500);
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            $.fn.fullpage.setScrollingSpeed(0);
        },
        onLeave: function(index, nextIndex, direction){ 
            if (countSliders > 9){
                $('.js-nav-curent').text(nextIndex).css('opacity', '0').animate({'opacity': '1'}, 'slow');
            }else{
               $('.js-nav-curent').text('0' + nextIndex).css('opacity', '0').animate({'opacity': '1'}, 'slow'); 
            } 
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
        },
    });
    
    // hamburger
    
    $('#hamburger').click(function (e) {
        e.preventDefault();
        $('.popup_menu').addClass('menu-open');
        //	$('body').css('overflow', 'hidden');
    })
    $('.popup_menu').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.popup_menu').removeClass('menu-open');
            //	$('body').css('overflow', 'auto');    
        }
    })
    $('.popup__close').click(function (e) {
        e.preventDefault();
        $('.popup_menu').removeClass('menu-open')
            //	$('body').css('overflow', 'auto');
    });
    
    
    
});