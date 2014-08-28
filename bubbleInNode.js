function timeSort() {
	console.time('JS Bubble Sort');

	var array = [3,4,1,3,5,1,92,2,4124,424,52,12];
	var arrLen = array.length;

	for (var c = 0; c < 1000000; c++) {
	    for (var i = 0; i < arrLen; i++) {
	        for (var y = 0; y < arrLen - 1; y++) {
	            if (array[y+1] < array[y]) {
	                var t = array[y];
	                array[y] = array[y + 1];
	                array[y + 1] = t;
	            }
	        }
	    }
	}

	console.log(array);
	console.timeEnd('JS Bubble Sort');
}

module.exports = {
	timeSort : timeSort
};
