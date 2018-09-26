/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */


    


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });
	
    $('body').on('click', '.moreAbout', function(){
        $('.more-content').slideDown();
        $(this).html("Read Less");
        $(this).addClass('lessAbout');
        $(this).removeClass('moreAbout');
    })
    $('body').on('click', '.lessAbout', function(){
        $('.more-content').slideUp();
        $(this).html("Read More");
        $(this).addClass('moreAbout');
        $(this).removeClass('lessAbout');
    })

    $('#bootstrap-touch-slider').bsTouchSlider();

	// ('.carousel').carousel({
 //      interval: 2000
 //    });
});


var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();




