$('document').ready(function() {
	var $routelist = $('.route-list a');
	$routelist.hover(function () {
		var b = $(this).index();
		var c = b*(-222);
		var d = c + 'px';
		var $detail = $('.route-detail');
		$detail.delay(500).animate({top: d}, 200);	
	}, function () {
		var $detail = $('.route-detail');
		$detail.stop(true, true);
	}); //end hover
	$('.tabs a').click(function () {
		$('.tabs a').removeClass('active');
		$(this).addClass('active');
		$('.route-detail').css('top', '0px');
		var e = $(this).index();
		var f = e*(-332);
		var g = f + 'px';
		var $loc = $('.loc');
		$loc.animate({top: g}, 200);
		return false;
	}); //end click
	
}); //end ready