// Your JS goes here

var newLi = document.createElement("body")
newLi.innerHTML = "butter"

var black = function (){
	var div = document.createElement('div')
	div.style.height = "11.1%"
	div.style.width = "11.1%"
	div.style.float = "left"
	div.style.paddingBottom = "11.1%"
	div.style.backgroundColor = "black"
	document.body.appendChild(div)
}

var red = function (){
	var div = document.createElement('div')
	div.style.height = "11.1%"
	div.style.width = "11.1%"
	div.style.float = "left"
	div.style.paddingBottom = "11.1%"
	div.style.backgroundColor = "red"
	document.body.appendChild(div)
}

var lineOne = function() {
	for (i = 0 ; i < 180 ; i++) {
		arr = [];
//		document.body.appendChild(arr.push (black()))
//		document.body.appendChild(arr.push (red()))
			arr.push (red())
			arr.push (black())
	}
	return arr
}

lineOne();

