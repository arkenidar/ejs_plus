//ejs_plus.js
function parse_ejs_tag(selector){
	for(var element of document.querySelectorAll(selector))
		element.insertAdjacentHTML('afterend', eval(element.innerText))
}
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed")
	parse_ejs_tag('.ejs')
})