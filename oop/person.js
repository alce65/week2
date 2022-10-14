export class Person {
    static isPerson(value) {
        return value instanceof Object;
    }

    constructor(name = '', age = null) {
        this.name = name;
        this.age = age;
    }
    greetings(target = { name: 'bro' }) {
        const text = `Hola ${target.name}, soy ${this.name} y tengo ${this.age} años`;
        console.log(text);
        return text;
    }
}
