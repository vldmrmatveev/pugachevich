$('.crew-slider-main').slick({
	dots: false,
  slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.crew-slider-secondary, .crew-slider-text',
  prevArrow: '.crew-slider-arrow-left',
	nextArrow: '.crew-slider-arrow-right',
	responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true
      }
    }
  ]
});

$('.crew-slider-secondary').slick({
	dots: false,
	arrows: false,
	slidesToShow: 4,
  slidesToScroll: 1,
	asNavFor: '.crew-slider-main, .crew-slider-text',
	centerMode: true,
	focusOnSelect: true,
	variableWidth: true
	//prevArrow: '.crew-slider-arrow-left',
	//nextArrow: '.crew-slider-arrow-right'
});

$('.crew-slider-text').slick({
	dots: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.crew-slider-main, .crew-slider-secondary',
	swipe: false,
	fade: true,
	cssEase: 'linear',
	adaptiveHeight: true
})