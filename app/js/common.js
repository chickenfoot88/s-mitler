$(function() {

	$("#my-menu").mmenu({
		extensions: [ "theme-black", "effect-menu-slide", "pagedim-black"],
		navbar: {
			title: "<img src='img/logo-1.svg' alt='Салон красоты Смитлер'>"
		},
		offCanvas: {
			position: "right"
		}
	});

		// var mmenuApi = $("#my-menu").data("mmenu");
		//
		// mmenuApi.bind("open:finish", function() {
		// 	$(".hamburger").addClass("is-active");
		// 	console.log("1");
		// }).bind("close:before", function() {
		// 	$(".hamburger").removeClass("is-active");
		//
		// });

		$(".carousel-services").on("initialized.owl.carousel", function() {
			setTimeout(function() {
				setCarouselImageMinHeight()
			}, 100);
		});

		$(".carousel-services").owlCarousel({
			loop: true,
			smartSpeed: 700,
			navText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"],
			responsiveClass: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				800: {
					items: 2
				},
				1100: {
					items: 3
				}
			},
			nav:true
		});

		function setCarouselImageMinHeight() {
			$(".carousel-services-item").each(function() {
				$(this).find('.carousel-services-image').css( 'min-height', $(this).find($(".carousel-services-content")).outerHeight() );
			});
		} setCarouselImageMinHeight();

		$(".carousel-services-composition .h3").each(function() {
			$(this).html($(this).html().replace(/(\S+)\s*$/, "<span>$1</span>"));
		});

		$("section .h2").each(function() {
			$(this).html($(this).html().replace(/^(\S+)/, "<span>$1</span>"));
		});

	//Resize Window
	function onResize() {
		$(".carousel-services-content").equalHeights();
	} onResize();

	window.onresize = function() { onResize() };

	$("select").selectize();

	$(".reviews").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});

	$(".partners").owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});

	$(".top").click(function() {
		$("html, body").stop().animate({scrollTop:0}, "slow", "swing");
	})

	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find(".success").addClass("active").css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find(".success").removeClass("active").fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(window).on('load', function() {
	$('.preloader').delay(100).fadeOut('slow');
});
