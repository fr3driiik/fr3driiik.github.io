function doThisOnClick() {
	alert("I do get it now!");
}
var originalColor;
var doThisOnMouseEnter = function() {
	textButton.style.color = "blue";
}
var doThisOnMouseOut = function() {
	textButton.style.color = originalColor;
}
var textButton = document.getElementById("jsText");
var originalColor = textButton.style.color;
textButton.style.cursor = "pointer";
textButton.addEventListener("click", doThisOnClick);
textButton.addEventListener("mouseenter", doThisOnMouseEnter);
textButton.addEventListener("mouseleave", doThisOnMouseOut);
