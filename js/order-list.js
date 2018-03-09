$(function(){
	$('.check label').click(function(){
		var $input=$(this).find('input');
		if($input.is(':checked')){
			$(this).attr('class','check-label')
		}else{
			$(this).attr('class','')
		}
	})
	$('#clickall').click(function(){
		var $input=$(this).find('input');
		if($input.is(':checked')){
			$('.check label').attr('class','check-label')
			$('.check input').prop("checked",true)
		}else{
			$('.check label').attr('class','')
			$('.check input').prop("checked",false)
		}
	})
})