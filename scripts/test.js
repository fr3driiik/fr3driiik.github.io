function doThisOnClick() {
	alert("I do get it now!");
}
var originalColor;
function doThisOnMouseEnter(listElement) {
	alert(listElement.target.innerHTML);
}
var doThisOnMouseOut = function() {
	textButton.style.color = originalColor;
}
var textButton = document.getElementById("jsText3");
var originalColor = textButton.style.color;
textButton.style.cursor = "pointer";

var list = document.getElementById("subjectList");
var listElements = list.getElementsByTagName("li");
for(var i = 0; i < listElements.length; i++){
	listElements[i].addEventListener("click", doThisOnMouseEnter);
}