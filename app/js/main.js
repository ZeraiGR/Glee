$(function (params) {

	$('.header__btn').on('click', function () {
		$('.menu__list').toggleClass('open');
	});

	$(".portfolio__text").mCustomScrollbar({
		theme: "3d-dark"
	});

	$('.top-slider__items').slick({
		arrows: false,
		dots: true,
		fade: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				dots: false,
				autoplay: true,
				fade: false
			}
		}]
	});

	$(".design-video__link").fancybox({
		maxWidth: 800,
		maxHeight: 600,
		fitToView: false,
		width: '70%',
		height: '70%',
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none'
	});



	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	var containerEl2 = document.querySelector('[data-ref="container-2"]');

	var config = {
		controls: {
			scope: 'local',
		}
	};

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);
});