$('.callback--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#callback-modal',
		baseClass: 'reviews-fancybox',
		touch: false,
	});
});

// Phone mask
$('.phone-mask').mask('+7 (999)999-99-99');