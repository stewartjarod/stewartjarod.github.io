(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	// $(window).load(function() {
	// 	$('#status').fadeOut();
	// 	$('#preloader').delay(350).fadeOut('slow');
	// });

	$(document).ready(function() {
		var defaults      = {
		  selector:             '[data-adaptive-background="1"]',
		  parent:               "section",
		  exclude:              [ 'rgb(0,0,0)', 'rgba(255,255,255)' ],
		  normalizeTextColor:   false,
		  normalizedTextColors:  {
		    light:      "#fff",
		    dark:       "#000"
		  },
		  lumaClasses:  {
		    light:      "ab-light",
		    dark:       "ab-dark"
		  }
		};
		$.adaptiveBackground.run(defaults);

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 40
		});

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1337);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch(['assets/images/flatirons.jpg']);

		/* ---------------------------------------------- /*
 		 * Navbar
		/* ---------------------------------------------- */

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		/* ---------------------------------------------- /*
		 * Count to
		/* ---------------------------------------------- */

		// $('#stats').waypoint(function() {
		// 	$('.timer').each(function() {
		// 		counter = $(this).attr('data-count'),
		// 		$(this).delay(6000).countTo({
		// 			from: 0,
		// 			to: counter,
		// 			speed: 3000,// Stats Counter Speed
		// 			refreshInterval: 50,
		// 		});
		// 	});
		//  }, { offset: '70%', triggerOnce: true });

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Owl slider
		/* ---------------------------------------------- */

		$("#owl-clients").owlCarousel({
			items : 4,
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000
		});

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

		/* ---------------------------------------------- /*
		 * Portfolio pop up
		/* ---------------------------------------------- */

		$('#portfolio').magnificPopup({
			delegate: 'a.pop-up',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: 'The image could not be loaded.',
				titleSrc: function(item) {
					return item.el.find('.ptitle').text();
				}
			}
		});

		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */
		//
		// function isValidEmailAddress(emailAddress) {
		// 	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		// 	return pattern.test(emailAddress);
		// };

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		// $("#contact-form").submit(function(e) {
		//
		// 	e.preventDefault();
		//
		// 	var c_name = $("#c_name").val();
		// 	var c_email = $("#c_email").val();
		// 	var c_message = $("#c_message ").val();
		// 	var responseMessage = $('.ajax-response');
		//
		// 	if (( c_name== "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
		// 		responseMessage.fadeIn(500);
		// 		responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
		// 	}
		//
		// 	else {
		// 		$.ajax({
		// 			type: "POST",
		// 			url: "http://getsimpleform.com/messages?form_api_token=3e8651131a9d031ea55e0fadb82633e8",
		// 			dataType: 'json',
		// 			data: {
		// 				c_email: c_email,
		// 				c_name: c_name,
		// 				c_message: c_message
		// 			},
		// 			beforeSend: function(result) {
		// 				$('#contact-form button').empty();
		// 				$('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
		// 			},
		// 			success: function(result) {
		// 				if(result.sendstatus == 1) {
		// 					responseMessage.html(result.message);
		// 					responseMessage.fadeIn(500);
		// 					$('#contact-form').fadeOut(500);
		// 				} else {
		// 					$('#contact-form button').empty();
		// 					$('#contact-form button').append('<i class="fa fa-retweet"></i> Try again.');
		// 					responseMessage.html(result.message);
		// 					responseMessage.fadeIn(1000);
		// 				}
		// 				$('#ajax-status').removeClass('as-active');
		// 			}
		// 		});
		// 	}
		//
		// 	return false;
		//
		// });

	});

})(jQuery);
