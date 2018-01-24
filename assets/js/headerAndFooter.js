/*
headerAndFooter.js

로컬의 헤더와 푸터를 불러와 페이지에 삽입합니다.
author : Moon Yunki

사용법

HAF.load({
	header:'header',
	footer:'footer',
	anyElement: 'anyElement' //타겟 요소: '파일명'
});

*/

var HAF = {}

HAF.load = function (config) {
	for (var key in config) {
		HAF.get(key, config[key]);
	}
}

HAF.get = function (target, path) {
	var section = '#'+target;
	$.ajax({
		method: "GET",
		url: './' + path + '.html'
	})
	.done(function(res) {
		$(section).append(res);
		HAF.current();
	});
}

HAF.current = function () {
	var currentPage = location.pathname.split('/')[location.pathname.split('/').length-1];
	$('a[href="' + currentPage + '"]').addClass('active').parent('li').addClass('active');
}
