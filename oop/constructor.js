function Person(name = '', age = null) {
    this.name = name;
    this.age = age;
    this.badMethod = function () {};
}

Person.define = function () {
    console.log('Las personas tenemos cerebro');
};

Person.isPerson = function (value) {
    return value instanceof Object;
};

Person.prototype.greetings = function (target = 'bro') {
    console.log(`Hola ${target}, soy ${this.name} y tengo ${this.age} años`);
};

// instancia un objeto -> p1 = {}
// se ejecuta y this apunta al nuevo objeto
// el __proto__ del objeto es el prototype de la función
// la propiedad constructor apunta a la función

const p1 = new Person('Pepe', 33);
console.log(p1);
p1.greetings();
const p2 = new Person('Elena', 34);
console.log(p2);
p2.greetings(p1.name);

let c = 0;
console.log(Person.isPerson(c));
console.log(Person.isPerson(p1));

Array.isArray(p2);
// Array.prototype.push = () => {
//     console.log('Insisto, no lo hagas');
// };

/* Array.define = function () {
    console.log('Tampoco lo hagas');
};

a.push(12);
Array.define(); */
