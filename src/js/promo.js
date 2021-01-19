var swiperHome = $('.promo__slick');
swiperHome.each(function () {
	var mySwiper = new Swiper(this, {
		slidesPerView: 1,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		initialSlide: 0,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.promo .promo__arrow_right',
			prevEl: '.promo .promo__arrow_left',
		},
	});
});