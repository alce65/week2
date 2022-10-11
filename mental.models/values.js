// Primitivos

console.log(22, typeof 22); // -- number
console.log(-22, typeof -22); // -- number
console.log(2.2, typeof 2.2); // -- number
console.log('22', typeof '22'); // -- string
console.log(`22`, typeof `22`); // -- string
console.log(true, typeof true); // -- boolean
console.log(false, typeof false); // -- boolean
console.log(undefined, typeof undefined); // -- undefined
console.log(null, typeof null, 'Error: type null'); // -- object (¡¡Bug!!)
console.log(22n, typeof 22n); // -- bigint
console.log(Symbol(), typeof Symbol()); // -- symbol

// Referenciado (= Objetos)

console.log({}, typeof {}); // -- object
console.log([], typeof []); // -- object
console.log(/a/, typeof /a/); // -- object
console.log(new Date(), typeof new Date()); // -- object
console.log(new Error('Error').message, typeof new Error()); // -- object
console.log((x) => x, typeof ((x) => x)); // -- function

// Wrapper Objects de String, Number y Boolean

console.log('pepe'.toUpperCase());

// Mutables

const arr = [12, 54, 87];
console.log(arr[0]);
arr[0] = 13;
console.log(arr[0]);

// Mutables e inmutables
let str = 'Pepe';
console.log(str[0]);
// str[0] = 'L'; // TypeError: Cannot assign to read only property '0' of string 'Pepe'
console.log(str[0]);

// Function pura

function foo(p, q) {
    // return ++p
    return p + q;
}
let y = 4;
let x = 20;
x = foo(x, y);
console.log(x);

// eslint-disable-next-line no-unused-vars
let answer = true;
// answer.x = 12; // TypeError: Cannot create property 'x' on boolean 'true'

{
    let foo;
    console.log(foo);
    console.log(foo?.bar); // TypeError: Cannot read properties of undefined (reading 'bar')
}

console.log(1e234);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9_007_199_254_740_991n);
const balance = 1_023_234.98;
console.log(balance.toLocaleString('en-US'));

// console.log(noExisto); //ReferenceError: noExisto is not defined

console.log(2 / 0);
console.log(0 / 2);
console.log(0 / 0);

console.log(+'22');
console.log(+'Pepe');

console.log(12 - '3');

console.log('22', isNaN('22'));
console.log('Pepe', isNaN('Pepe'));

console.log(Number.isNaN('Pepe'));
console.log(Number.isNaN(0 / 0));
