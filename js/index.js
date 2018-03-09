$(function () {
	// 头部搜索
	$('.header_middle_c_button').click(function () {
		var inpVal = $('.search').val();
		alert(inpVal)
	})
	$('.h_city').click(function () {
		var thisVal = $(this).text();
		$('.search').val(thisVal);
	})
	// 返回顶部
	$('.r_return').click(function(){
		$('body, html').animate({
            'scrollTop': 0,
        }, 400);
	})
})