$(function(){
	$("Dlab").click(function(){
		$("Dlab").removeClass("active");
		$(this).addClass("active")
	})
	$(".jiah").click(function(){
		var suo=$(".jiah").index($(this));
		var va=parseInt($(".bjia").eq(suo).val())+1;
		$(".bjia").eq(suo).val(va);
	})
	$(".jian").click(function(){
		var suo=$(".jian").index($(this));
		var va=parseInt($(".bjia").eq(suo).val())-1;
		if(va>=1){
			$(".bjia").eq(suo).val(va);
		}
	})
})