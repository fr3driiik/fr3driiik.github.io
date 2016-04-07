function doThisOnClick() {
	alert("I do get it now!");
}
var doThisOnMouseEnter = function() {
	textButton.style.color = "blue";
}
var doThisOnMouseOut = function() {
	textButton.style.color = "red";
}
var textButton = document.getElementById("jsText");
textButton.style.cursor = "pointer";
textButton.addEventListener("click", doThisOnClick);
textButton.addEventListener("mouseenter", doThisOnMouseEnter);
textButton.addEventListener("mouseleave", doThisOnMouseOut);
