if ($(".faq__top").length > 0){
	$('.faq__top').click(function(){
		$(this).parent().toggleClass('active');
		if( $(this).parent().hasClass('active')) {
			$(this).next().slideDown();
		} else {
			$('.faq__block').slideUp();
			$(".faq__box").removeClass("active");
		}
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".faq__box.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("active");
			}
		});
	});
	$(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".faq__block");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp();
			}
		});
	});
}