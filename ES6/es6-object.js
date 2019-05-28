// Get Object Key
Object.keys({name: 'imooc', age: 1});
// Gets the number of data in an object
Object.keys({name: 'imooc', age: 1}).length;
// Traversing an array
Object.entries({name: 'imooc', age: 1});
// Extend function
const obj = {name: 'imooc', age: 3};
const newObj = {...obj, job: 'IT', age: 18};
console.log(newObj);
// Get the head and tail of a list
const [head, ...tail] = [1, 2, 3];
const [last, ...initial] = [1, 2, 3].reverse();