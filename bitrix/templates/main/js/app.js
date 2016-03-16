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
        resize: true,
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
    
        
    // about.html team-slider 
    
    $('.team-slider').slick({
        infinite: false,
        //arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        //centerPadding: '0px',
        prevArrow:'.left-arr',
        nextArrow:'.right-arr', 
        responsive: [
    {
        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    ]  
    });
    
    // contacts.html google.map
    
    $('.marker-item-block > a').click(function(e) {
        e.preventDefault();
        $('.marker-item-block > a').removeClass('marked');
        $(this).addClass('marked');
    });
	
	// scrollto (плавная прокрутка по якорю без плагина)
	
	$('a.scrollto').click(function (e) {
		e.preventDefault();
		var elementClick = $(this).data('href')
		var destination = $(elementClick).offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1100);
	});
	
	// animation blocks
	
	timeout = setTimeout(function () {
            $('.inner-content').addClass('ready');
        }, 2500);
	
	
	    $('.animation').each(function() {
        var win             = $(window),
			el              = $(this),
			scrollPosition  = win.scrollTop(),
            elTop;

            if ( el.hasClass('left-top') ||
                 el.hasClass('right-top') ||
                 el.hasClass('top')) {
                elTop = el.offset().top + 100;
            }
            
            else {
                elTop = el.offset().top;
            }

            if ( scrollPosition + win.height() >= elTop ) {
                el.addClass('done');
            }

            win.on('scroll', function() {
				//console.log(win.scrollTop());
//                if ( scrollPosition + win.height() >= elTop ) {
                if ( win.scrollTop() + win.height() >= elTop ) {
					//console.log(scrollPosition);
                    el.addClass('done');
                }
            });

    });
	
	
    
});