function doThisOnClick(listElement) {
	if(listElement.currentTarget !== listElement.target){
		alert(listElement.target.innerHTML);
	}
	listElement.stopPropagation();
}

var lists = document.getElementsByClassName("subjectList");
for(var x = 0; x <  lists.length; x++){
	lists[x].addEventListener("click", doThisOnClick);
	
	var listElements = lists[x].getElementsByTagName("li");
	for(var i = 0; i < listElements.length; i++){
		listElements[i].style.cursor = "pointer";
	}
}