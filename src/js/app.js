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
        css3: true,
        
        
        scrollingSpeed: SCROLLING_SPEED,
        afterRender: function() {
            //$('.section').delay(20000).addClass('done');
            $('.nav-slider').prepend('<div class="js-nav-curent">01</div>');
        },
        afterLoad:function(link,index) {
            $('.section .slider-content').fadeIn(1500);
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            $.fn.fullpage.setScrollingSpeed(0);
            //$('.section.active .slider-content .left-content a').fadeOut(2000);
            console.log('out1');
        },
        onLeave: function(index, nextIndex, direction){   
            $('.js-nav-curent').text('0' + nextIndex).css('opacity', '0').animate({'opacity': '1'}, 'slow');
            
            $('.section.active .slider-content .left-content a').animate({'opacity': '1'}, 'slow');
            console.log('out3');
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
            console.log('out2');
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
     $('[data-id = subscribe-to-news]').click(function (e) {
        e.preventDefault();
        $('.popup_menu').removeClass('menu-open')
            //	$('body').css('overflow', 'auto');
    });
    
});