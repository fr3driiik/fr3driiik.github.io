function doThisOnClick() {
	alert("I do get it now!");
}
var originalColor;
function doThisOnMouseEnter(listElement) {
	alert("hej");
	listElement.style.backgroundColor = originalColor; //funkar inte
}
var doThisOnMouseOut = function() {
	textButton.style.color = originalColor;
}
var textButton = document.getElementById("jsText3");
var originalColor = textButton.style.color;
textButton.style.cursor = "pointer";
textButton.addEventListener("click", doThisOnClick);
textButton.addEventListener("mouseenter", doThisOnMouseEnter);
textButton.addEventListener("mouseleave", doThisOnMouseOut);

var listElements = document.getElementById("subjectList").getElementsByTagName("li");
for(var i = 0; i < listElements.length; i++){
	alert(i);
	listElements[i].addEventListener("click", function(){
		doThisOnMouseEnter(listElements[i]);
	});
}