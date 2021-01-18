var swiperHome = $('.main-gallery__slick');
swiperHome.each(function () {
	var mySwiper = new Swiper(this, {
		slidesPerView: 1.7,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		initialSlide: 0,
		navigation: {
			nextEl: '.main-gallery .arrow_next',
			prevEl: '.main-gallery .arrow_prew',
		},
		breakpoints: {
			100: {
				slidesPerView: 1.14,
				slidesPerGroup: 1,
				spaceBetween: 7.2,
				initialSlide: 0,
			},
			600: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				initialSlide: 0,
			},
			760: {
				slidesPerView: 1.4,
				slidesPerGroup: 1,
				initialSlide: 0,
			},
			1010: {
				slidesPerView: 1.7,
				slidesPerGroup: 1,
				initialSlide: 0,
			}
		}
	});
});

$(".main-gallery__img").fancybox({
	backFocus: false
});