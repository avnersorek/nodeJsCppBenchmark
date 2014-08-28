console.log('Starting benchmark ...');

console.log('Sorting in JS');
var inNode = require('./bubbleInNode');
inNode.timeSort();

console.log('Sorting in C++');
var inC = require('./bubbleInC.js');
inC.timeSort();
