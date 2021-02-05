$(function() {

	// Проверка поддержки Webp
	function hasWebP() {
		var rv = $.Deferred(), img = new Image()
		img.onload = function() { rv.resolve() }
		img.onerror = function() { rv.reject() }
		img.src = "http://www.gstatic.com/webp/gallery/1.webp"
		return rv.promise()
	}
	hasWebP().then(function() {
	}, function() {
		$('body').addClass('no-webp')
	})

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		const anchor = $(this)
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-0 // отступ от меню
		}, 500)
	e.preventDefault()
	})

	// Клик по гамбургеру на моб версии
	// $('.nav-mob__link').click(function() {
	// 	$('.nav-mob').toggleClass('active')
	// })
	// $('.nav-list__li').click(function() {
	// 	$('.nav-mob').removeClass('active')
	// })

	// if ($(window).width() > 991) {
	// 	const heightImg = $('.head-img').height()
	// 	$('.autoHeight').css('min-height', heightImg - '80')
	// }


	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0,
		touch: false
	})

	$('.fancybox-open').fancybox({
		margin: 0,
		padding: 0
	})

	$('.slider').slick({
		infinite: false,
		dots: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000
	})

	$('.slick-dots li button').each( function(){
		if ($(this).html() < 10) {
			$(this).prepend('0');
		}
	})

	const lastNumb = $('.slick-dots li:last-child button').html()
	$('.slick-dots').append('<div class="last-numb"><p>/ '+lastNumb+'</p></div>')

	$(".second-accordion").accordionjs()

	$('.layouts-menu').on('click', 'div:not(.active)', function() {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.layouts').find('.layouts-tab').removeClass('active').eq($(this).index()).addClass('active')
	})

})
