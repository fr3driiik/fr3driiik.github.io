function doThisOnClick(listElement) {
	alert(listElement.target.innerHTML);
}

var list = document.getElementById("subjectList");
var listElements = list.getElementsByTagName("li");
for(var i = 0; i < listElements.length; i++){
	listElements[i].style.cursor = "pointer";
	listElements[i].addEventListener("click", doThisOnClick);
}