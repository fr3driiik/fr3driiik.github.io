function doThisOnClick(listElement) {
	alert(listElement.target.innerHTML);
}

var lists = document.getElementsByClassName("subjectList");
for(var x = 0; x <  lists.length; x++){
	var listElements = lists[x].getElementsByTagName("li");
	for(var i = 0; i < listElements.length; i++){
		listElements[i].style.cursor = "pointer";
		listElements[i].addEventListener("click", doThisOnClick);
	}
}