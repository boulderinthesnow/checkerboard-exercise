// Your JS goes here

var randomColor = function () {
	var chars = "0123456789ABCDEF".split('');
	var start = '#'
	for (var q = 0 ; q < 6 ; q++) {
		start += chars[Math.floor(Math.random() * 16)];
		console.log (start)
	}
	return start;
}

var black = function (){
	var div = document.createElement('div')
	div.style.height = "11.1%"
	div.style.width = "11.1%"
	div.style.float = "left"
	div.style.paddingBottom = "11.1%"
	div.style.backgroundColor = randomColor()
	document.body.appendChild(div)
}

var red = function (){
	var div = document.createElement('div')
	div.style.height = "11.1%"
	div.style.width = "11.1%"
	div.style.float = "left"
	div.style.paddingBottom = "11.1%"
	div.style.backgroundColor = randomColor()
	document.body.appendChild(div)
}



//console.log(randomColor())

var lineOne = function() {
	for (i = 0 ; i < 180 ; i++) {
		arr = [];
			arr.push (red())
			arr.push (black())
	}
	return arr
}

lineOne();

