$('.portfolio-slider').slick({
	dots: false,
	arrows: true,
  slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.portfolio-slider-min',
	responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true
      }
    }
  ]
});

$('.portfolio-slider-new').slick({
	dots: false,
	arrows: true,
	adaptiveHeight: true,
  slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.portfolio-slider-min',
	responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true
      }
    }
  ]
});

$('.portfolio-slider-min').slick({
	dots: false,
	arrows: false,
	slidesToShow: 1,
  slidesToScroll: 1,
	asNavFor: '.portfolio-slider',
	centerMode: true,
	variableWidth: true,
	infinite: true,
	focusOnSelect: true
});