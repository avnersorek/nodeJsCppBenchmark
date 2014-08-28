var ffi = require("ffi");
var ref = require("ref");


var libmylibrary = ffi.Library('./bubbleInC', {
  "BubbleSort": [ ref.refType("int"), [] ]
});


function timeSort() {
	console.time('C++ Bubble Sort');

 	var array = libmylibrary.BubbleSort();
	console.log(array.deref());

	console.timeEnd('C++ Bubble Sort');
}


module.exports = { timeSort : timeSort };

