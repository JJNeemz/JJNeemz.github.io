$(document).ready(function(){
	
	$(".bounceLetter").on("mouseenter", function(){
		$(this).effect("bounce", {times:3}, 700);
		$(this).addClass("redText");
	});

	$(".bounceLetter").on("mouseleave", function(){
		$(this).removeClass("redText");
	});

	$("img").on("mouseenter", function(){
		$(this).addClass("spinAnimation transparent");
	})

	$("#sections div.column").on("mouseleave", function(){
		$("img").removeClass("spinAnimation transparent");
	})

});
