//ejs_array.js
function ul_tag(array){
	var template_ejs=
	`<ul>
	<%
	for(var i of array.keys()) {
	%>
		<li><%= array[i] %></li>
	<%
	}
	%>
	</ul>`
	return ejs.render(template_ejs,{array})
}