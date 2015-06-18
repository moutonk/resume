/*
* Theme Name: Kurr
* File name: custom.js
* Theme URL: kurr.mordorthemes.com
* Description: Kurr - Responsive Resume, Personal Portfolio Template
* Author: Mordorthemes
* Author URL: http://www.mordorthemes.com
* Support: support@mordorthemes.com
* Version: 1.0
*/





/* ==============================================
    Page Preloader
=============================================== */
$(window).load(function() { 
    $("#loader").delay(500).fadeOut(); 
    $(".mask").delay(1000).fadeOut("slow");
});



/* Start Ready Function */
jQuery(document).ready(function ($) { 

'use strict';



/* ==============================================
    Navigation
=============================================== */

    // Internal links

    if ($('.off-canvas').length) {
        $('.inner-link').smoothScroll({
            speed: 900
        });
    } else {
        $('.inner-link').smoothScroll({
            speed: 900,
            //offset: -100
        });
    }


    $('.off-canvas .toggler-nav').click(function () {
        $('.off-canvas').toggleClass('reveal-nav');
        $('.wrapper').toggleClass('move-content');
        $('section#home').toggleClass('move-content');
        $('.footer-container').toggleClass('move-content');
    });


    $('.wrapper').click(function () {
        if ($(this).hasClass('move-content')) {
            $(this).removeClass('move-content');
            $('section#home').removeClass('move-content');
            $('.off-canvas').removeClass('reveal-nav');
            $('.footer-container').toggleClass('move-content');
        }
    });

    $('section#home').click(function () {
        if ($(this).hasClass('move-content')) {
            $(this).removeClass('move-content');
            $('.wrapper').removeClass('move-content');
            $('.off-canvas').removeClass('reveal-nav');
            $('.footer-container').toggleClass('move-content');
        }
    });






/* ==============================================
    Magnific popup (lightbox on portfolio section)
=============================================== */
    $('.popup-link').magnificPopup({ 
    type:'image',
    image: {
    // options for image content type
    titleSrc: 'title'
    },

    gallery:{
        enabled: true, // set to true to enable gallery
        preload: [0,2], // read about this option in next Lazy-loading section
        navigateByImgClick: true,               
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        tPrev: 'Prev', // title for left button
        tNext: 'Next', // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    }

    })


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });








/* ==============================================
    Slideshow Images on Intro
=============================================== */
$("#home").backstretch([
	"img/img1.jpg",
    "img/img2.jpg"
    ], {
    	fade: 750,
        duration: 6000
});






/* ==============================================
   Interests Carousel
=============================================== */
    $("#interests").owlCarousel({
      navigation : false,
      navigationText: ["<i class='icon kurr-left-open-big'></i>", "<i class='icon kurr-right-open-big'></i>"],
      slideSpeed : 300,
      pagination: true,
      paginationSpeed : 400,
      autoPlay: false,
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
    }); 

    $("#prizesCarousel").owlCarousel({
        navigation: false,
        navigationText: ["<i class='icon kurr-left-open-big'></i>", "<i class='icon kurr-right-open-big'></i>"],
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        autoPlay: false,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: 1 // itemsMobile disabled - inherit from itemsTablet option
    });




/* ==============================================
   Testimonial Carousel
=============================================== */
    $("#testimonial").owlCarousel({
      navigation : false,
      slideSpeed : 300,
      pagination: true,
      paginationSpeed : 400,
      autoPlay: 8000,
      singleItem : true
    });




}); 
// end ready function











/* ==============================================
   Easypiechart
=============================================== */

// for skill chat jquary
$(document).ready(function(e) {
//var windowBottom = $(window).height();
var index=0;
$(document).scroll(function(){
	var top = $('#skills').height()-$(window).scrollTop();
	console.log(top)
	if(top<-300){
		if(index==0){	
			
			$('.chart').easyPieChart({
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
			
		}
		index++;
	}
})
//console.log(nagativeValue)
});


// chart loding
$(window).load(function() {
	
	var chart = window.chart = $('.chart').data('easyPieChart');
	$('.js_update').on('click', function() {
		chart.update(Math.random()*100);
	});
});






/* ==============================================
   Timeline
=============================================== */
jQuery(document).ready(function($){

    'use strict';

    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
})






/* ==============================================
    Contact Form
=============================================== */
$('#contactform').submit(function(){

    'use strict';

        var action = $(this).attr('action');

        $("#message").slideUp(300,function() {
        $('#message').hide();

        $('#submit')
            .after('<img src="img/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');

        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown(300);
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );

        });

        return false;

    });