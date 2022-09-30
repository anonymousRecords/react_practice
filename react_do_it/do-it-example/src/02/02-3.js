// var array1 = ['one', 'two'];
// var array2 = ['three', 'four']
// var combined = [array1[0], array1[1], array2[0], array2[1]];
// var combined = array1.concat(array2);
// var combined = [].concat(array1, array2);
// var first = array[0];
// var second = array[1];
// var three = array1[2] || 'empty';
// function func() {
//     var args = Array.prototype.slice.call(arguments);
//     var first = args[0];
//     var others = args.slice(1, args.length);
// }

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
// 결과 : combined = ['one', 'two', 'three', 'four'];
const [first, second, three = 'empty', ...tohers] = array1;
// 결과 : first = 'one', second = 'two', three = 'empty', other = []
// 올바르지 못한 예
// var wrongArr = ...array1;
function func(...args){var [first, ...others] = args;}