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

var colorFader = function(y) {
	var start = "#3E3E"
	return start + y + "5"


	//return 3E3E + B5
	// 3E3EB5
}
console.log (colorFader(5))

var colorFader2 = function(y) {
	var start = "#63AD"
	return start + y + "2"

}

console.log(colorFader(1))

var black = function (x){
	var div = document.createElement('div')
	div.style.height = "11.1%"
	div.style.width = "11.1%"
	div.style.float = "left"
	div.style.paddingBottom = "11.1%"
	div.style.backgroundColor = colorFader(x)
	document.body.appendChild(div)
}

var red = function (y){
	var div = document.createElement('div')
	div.style.height = "11.1%"
	div.style.width = "11.1%"
	div.style.float = "left"
	div.style.paddingBottom = "11.1%"
	div.style.backgroundColor = colorFader2(y)
	document.body.appendChild(div)
}

var oneLine = function(k) {
	arr = [];
	for ( i = 0 ; i < 9 ; i++) {
		arr.push (red(k))
		arr.push (black(k))
	}
}


var wholeEvent = function() {
	arr = [];
	for (za = 0 ; za < 9 ; za++) {
		arr.push(oneLine(za))	
	}
	return arr
}

wholeEvent();

