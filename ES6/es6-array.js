// Traversing an array
[1, 2, 3].forEach(function (value, index) {
  // 1 2 3
  console.log(value);
});


// Map new Array
let arr = [1, 2, 3].map(v => v * 2);
// 2 4 6
console.log(arr)


// Whether all elements pass the test
let arr2 = [1, 2, 3, 4].every(v => v > 3);
// false
console.log(arr2)


// Is there an element passing the test
let arr3 = [1, 2, 3, 4].some(v => v > 3);
// true
console.log(arr3)


// Filter array
let arr4 = [1, 2, 3, 4, 5].filter(v => v > 3)
// 4 5
console.log(arr4)
// Find the element that meets the criteria
let arr5 = [{name: 'genius', age: '25'}, {name: 'rmos', age: 1}]


// Find Index
let arr6 = [1, 2, 3].indexOf(2)
// 1
console.log(arr6)


// Expend
let arr7 = [1, 2, 3]
let arr8 = [4, 5, 6]
let obj1 = [...arr7, ...arr8]
// 1 2 3 4 5 6
console.log(obj1)


// Array to weight
let arr9 = [1, 2, 3, 4, 3, 2, 1]
let obj2 = [...new Set(arr9)]
// 1 2 3 4
console.log(obj2)