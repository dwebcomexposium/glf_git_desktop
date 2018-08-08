$(document).ready(function () {
	var rubriqueSlider = $('.rcb-slide-list');
	if(rubriqueSlider.length > 0) {
		rubriqueSlider.slick({
			adaptiveHeight: false,
			prevArrow: '<div class="slick-prev"></div>',
			nextArrow: '<div class="slick-next"></div>',
			autoplay: true,
			autoplaySpeed: 4000
		});
	}
});