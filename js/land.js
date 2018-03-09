$(function(){
	$(".dfang").click(function(){
		$(".dfang").css("border-bottom","2px solid #959595");
		$(".dfang").children().css("color","#959595");
		$(this).css("border-bottom","2px solid #11a13a");
		$(this).children().css("color","#11a13a");
		var suo=$(this).index();
		if(suo==0){
			$("#Zland").slideDown()
			$("#Pland").slideUp()
		}else{
			$("#Zland").slideUp()
			$("#Pland").slideDown()
		}
	})
})