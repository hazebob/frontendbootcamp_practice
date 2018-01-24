console.log($);

$(document).ready(function () {

	$('.box').fadeOut('slow');
	$('.box').fadeIn('slow');
	$('.box').addClass('show');
	$('.box').removeClass('show');

	$('.list li').addClass('list-item');
	$('.list li:nth-child(2n)').addClass('even');

});
