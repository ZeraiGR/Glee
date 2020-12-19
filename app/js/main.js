$(function (params) {

	$('.partners__list').slick({
		slidesToShow: 5,
		responsive: [{
				breakpoint: 979,
				settings: {
					slidesToShow: 4,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 414,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

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