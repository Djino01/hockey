if ($(window).width() <= '1010') {
	var swiperHome = $('.prices__row');
	swiperHome.each(function () {
		var mySwiper = new Swiper(this, {
			slidesPerView: 1.25,
			spaceBetween: 10,
			slidesPerGroup: 1,
			loop: true,
			speed: 1000,
			iOSEdgeSwipeDetection: true,
			initialSlide: 0,
			breakpoints: {
				100: {
					slidesPerView: 1.25,
					slidesPerGroup: 1,
					spaceBetween: 7.2,
					initialSlide: 0,
				},
				600: {
					slidesPerView: 2.4,
					slidesPerGroup: 1,
					initialSlide: 0,
				}
			}
		});
	});
}