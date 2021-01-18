/*Focus*/
if ($(".order__field").length > 0) {
	$('.order__field').on('focus', function () {
		$(this).parent().find('.order__caption').addClass("active");
		$(this).parent().addClass("active");
	});
	$('.order__field').on('blur', function () {
		let email = $(this).val();
		if (email.length == 0) {
			$(this).parent().find('.order__caption').removeClass("active");
			$(this).parent().removeClass("active");
		} else {
			$(this).parent().find('.order__caption').addClass("active");
			$(this).parent().addClass("active");
		}
	});
}