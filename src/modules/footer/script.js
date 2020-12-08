$('.link-scroll-up').click(function(e){
	e.preventDefault();
	let scroll_block = $(this).attr('href');
	let scroll_item = $(scroll_block).offset().top - 30;
	$("body,html").animate({scrollTop: scroll_item}, 800);
});

$(".link-scroll").click(function(e){
	let scroll_block = $(this).attr('href');
	let scroll_item = $(scroll_block).offset().top - $('.header').height();
	$("body,html").animate({scrollTop: scroll_item}, 800);
})