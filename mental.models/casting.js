// tipado dinámico
// tipado debil

let a;
console.log(typeof a); // undefined
a = 23;
console.log(typeof a); // number
console.log(Boolean(a)); // true
console.log(typeof a); // number

let b = {};
b.name = 'Pepe';

const c = {};
Object.freeze(c);
// c.name = 'Pepe'; // TypeError: Cannot add property name, object is not extensible

const foo = (o) => {
    let newO = { ...o };
    newO.name = 'Pepe';
    return newO;
};

const obj = { name: 'Ernesto' };
const newObj = foo(obj);
console.log(newObj);
console.log(obj);
