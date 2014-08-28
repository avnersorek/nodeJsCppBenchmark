var ffi = require("ffi");

var libmylibrary = ffi.Library('bubbleInC', {
  "BubbleSort": [ "void", [] ]
});

function timeSort() {
	console.time('C++ Bubble Sort');

	var array = libmylibrary.BubbleSort();

	console.log(array);
	console.timeEnd('C++ Bubble Sort');
}

module.exports = {
	timeSort : timeSort
};
