$(document).ready(function() {
	// Clone header contact and search for mobile nav so there's no need to maintain in two places
	$('.header-contact > ul').clone().addClass('header-contact').appendTo('.header-nav');
	$('.header-search').clone().prependTo('.header-nav');

	// Dropdowns
	$('[data-js="nav-trigger"]').click(function() {
		$(this).add('.header-nav').toggleClass('active');
	});
	$('[data-js="subnav-trigger"]').click(function() {
		// If the clicked trigger's dropdown is open, close dropdown and toggle icon back to default
		if ($(this).parent().parent().hasClass('active')) {
			$(this).parent().parent().removeClass('active');
			$(this).removeClass('icon-chevron-up').addClass('icon-chevron-down');
		} 
		// If the clicked trigger's dropdown is closed, close any open dropdowns and open the clicked
		else {
			$(this).closest('ul').find('.active').removeClass('active');
			$(this).closest('ul').find('.icon-chevron-up').removeClass('icon-chevron-up').addClass('icon-chevron-down');
			$(this).parent().parent().addClass('active');
			$(this).removeClass('icon-chevron-down').addClass('icon-chevron-up');
		}
		return false;
	});
	$('[data-js="loc-trigger"]').click(function() {
		$(this).add('.loc-list').toggleClass('active');
	});
});