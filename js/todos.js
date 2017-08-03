$("ul").on("click", "li",function(){
	$(this).toggleClass("selected");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	});
	
	e.stopPropagation();

});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
	$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});