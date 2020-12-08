$('.main-slider').slick({
	dots: true,
	arrows: true,
  slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true
});

$('.collapsed-btn').click(function(){
	if ($(this).attr('aria-expanded') == 'true') {
		let collapsedPosition = $(this).attr('data-target');
		let collapsedItem = $(collapsedPosition).offset().top;
		let headerHeight = $('#header').height();
		console.log(collapsedItem);
		$("body,html").animate({scrollTop: collapsedItem - headerHeight}, 800);
	}
})