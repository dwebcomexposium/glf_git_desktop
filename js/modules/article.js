$(document).ready(function () {
	$('.article-wrapper').each(function (i, e) {
		var article = $(e);
		if (article.find('.at-publication').size()) {
			article.addClass('has-at-publication');
		}
	})
});