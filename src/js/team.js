if ($(window).width() <= '760') {
	var swiperHome = $('.team__row');
	swiperHome.each(function () {
		var mySwiper = new Swiper(this, {
			slidesPerView: 1.25,
			spaceBetween: 10,
			slidesPerGroup: 1,
			loop: true,
			speed: 1000,
			iOSEdgeSwipeDetection: true,
			initialSlide: 0,
		});
	});
}