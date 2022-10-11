const foo = 5;
const moreFoo = 5;
const bar = '5';

console.log(foo == bar);
console.log(foo === bar);
console.log(Object.is(foo, bar));
console.log(Object.is(foo, moreFoo));

let a = {};
let b = {};
let c = a;
console.log(Object.is(a, b));
console.log(Object.is(a, c));
