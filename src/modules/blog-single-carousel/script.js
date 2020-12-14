$('.blog-slider').slick({
	dots: false,
	arrows: true,
  slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true
      }
    }
  ]
});