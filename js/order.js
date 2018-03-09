$(function(){
	$("#Zwright li").click(function(){
		var Ztai=$(this).attr("class");
		if(Ztai=="Yshou"){
			alert("座位已被选择，下次记得早点偶")
			
		}else if(Ztai=="Yxuan"){
			$(this).removeClass("Yxuan");
		}else{
			$(this).addClass("Yxuan");
		}
	})
	$(".jia").click(function(){
		var suo=$(".jia").index($(this));
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
	$("#Gmai label").click(function(){
		var bo=$(this).attr("class");
		if(bo){
			$(this).removeClass("Gou")
		}else{
			$(this).addClass("Gou")
		}
	})
	$("#zhankai").click(function(){
		var bo=$(".zui").attr('style');
		if(bo=="display: table;"){
			$(".zui").fadeOut();
		}else{
			$(".zui").fadeIn();
		}
	})
})
