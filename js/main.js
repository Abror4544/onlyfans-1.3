jQuery(document).ready(function ($) {
	$('.top-footer h5, .top-footer .h5').click(function (event) {
		$(this).toggleClass('active')
		$(this).parent('.item').find('ul').toggleClass('active')
	});
});
