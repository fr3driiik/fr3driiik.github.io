$(document).ready(function(){
	$("#headerLine").fadeOut(0).slideDown(2000);
	$("#headerLine").click(function(){
		$(this).fadeOut();
	});
});