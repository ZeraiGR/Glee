$(function (params) {

	let bigSlider = new Swiper('.slider-big', {
		slidesPerView: 1,
		// Смена прозрачности
		effect: 'fade',

		// Дополнение к fade
		fadeEffect: {
			// Параллельная
			// Смена прозрачности
			crossFade: true
		},
		// Миниатюры (превью)
		thumbs: {
			swiper: {
				el: '.slider-mini',
				slidesPerView: 3,
				direction: 'vertical',
				watchOverflow: true,
			}
		},
	});

	$('.delalis-product__counter').styler();

	$('.related__slider-list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: ' <button class="slick-btn slick-btn--invert slick-prev"> <svg width = "22"height = "9" class = "icon icon-arrow" ><use xlink: href = "../images/icons/icons.svg#arrow-left-slider" > < /use> </svg> </button>',
		nextArrow: '<button class="slick-btn slick-btn--invert slick-next"> <svg width = "22"height = "9" class = "icon icon-arrow" ><use xlink: href = "../images/icons/icons.svg#arrowl-right-slider" > < /use> </svg> </button>',
	});

	$('.tabs__top-item').on('click', function (e) {
		e.preventDefault();
		$('.tabs__top-item').removeClass('tabs__top-item--active');
		$(this).addClass('tabs__top-item--active');
		$('.tabs__content-item').removeClass('tabs__content-item--active');
		$($(this).attr('href')).addClass('tabs__content-item--active');
	})

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
	});

	$('.filter-recent__star').rateYo({
		starWidth: '11px',
		readOnly: true,
		normalFill: '#d6d6d6',
		ratedFill: "#ffcc00",
		spacing: "7px",
		"starSvg": '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
			'<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>' +
			'</svg>'
	});

	$('.product-card__star, .delalis-product__star').rateYo({
		starWidth: '20px',
		readOnly: true,
		normalFill: '#d6d6d6',
		ratedFill: "#ffcc00",
		spacing: "7px",
		"starSvg": '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
			'<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>' +
			'</svg>'
	});

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
				breakpoint: 415,
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