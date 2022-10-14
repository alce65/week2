const person = {
    arms: 2,
};

const alumno = {
    course: 'CODERS',
    __proto__: person,
};

const pepe = {
    age: 23,
    __proto__: alumno,
};

const earnests = {
    favorite: 'pepperoni',
};

Object.prototype.favorite = 'bacon';

console.log(pepe.course);
console.log(pepe.arms);
console.log(pepe.__proto__);
console.log(person.__proto__);
console.log(pepe.favorite);
console.log(earnests.favorite);
