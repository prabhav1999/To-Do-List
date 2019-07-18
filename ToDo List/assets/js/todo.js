// Check off specific todo by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on 'X'
$("ul").on("click", "span", function(event) {
	event.stopPropagation(); // prevents event bubbling
	$(this).parent().fadeOut(750, function(){
		$(this).remove();
	}) // removes parent ie li after fading out
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// new todo text
		var todoText = $(this).val();
		$(this).val("");
		// create new li add it to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});