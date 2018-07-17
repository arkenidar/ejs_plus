//ejs_price.js
function price(product,price){
	var template_ejs=`<div><%= product %>: <%= format_price(price) %></div>`
	return ejs.render(template_ejs,{product,price})
}
function format_price(price){    
	var dplaces = price == parseInt(price, 10) ? 0 : 2
	price = '$' + price.toFixed(dplaces)
	return price
}