$(document).ready(function () {
	var homeSlider = $('.HomeSlider-slide-list');
	homeSlider.slick({
		autoplay: true,
  		autoplaySpeed: 5000,
                initialSlide: 1
	});
	var navLinkGroups = $('.HomeSlider-nav-link-group');

	$('.HomeSlider-nav-link-group-title').click(function (event) {
		event.preventDefault();
		var target = $(this);
		var index = target.parents('.HomeSlider-nav-link-group').index();
		homeSlider.slick('slickGoTo', index);
	});

	navLinkGroups.hover(function (event) {
		var target = $(this);
		var index = target.index();
		homeSlider.slick('slickGoTo', index, true);
	});

	homeSlider.on('afterChange', function (event, slick, index) {
		navLinkGroups.removeClass('selected');
		navLinkGroups.eq(index).addClass('selected');
	});

	homeSlider.slick('slickGoTo', 1);

	/*-------------*/

	var exhibitionsHighlights = $('.exhibitions-highlights').first().find('.la-list').first();
	var exhibitionsHighlightsSlider = exhibitionsHighlights.slick({
	  infinite: true,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
	    {
	      breakpoint: 1800,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    }
	   ]
	});

	// fix alignement issue when less or equal than 6 items
	$(window).resize(function() {
		var n_slides = exhibitionsHighlights.find('.la-item').size();
		if ($(window).width() >= 1800) {
			if (n_slides <= 6) {
				exhibitionsHighlights.find('.slick-list').css({
					'padding-left': 12
				})
			}
		}
	}).resize();
});