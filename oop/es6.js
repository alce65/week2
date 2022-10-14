import { Person } from './person.js';
import { Student } from './student.js';

// ES6+ - ES2015 --- ES2022

const p1 = new Person('Pepe', 33);
console.log(p1);
p1.greetings();
const p2 = new Person('Elena', 34);
console.log(p2);
p2.greetings(p1);

const s1 = new Student('Pepito', 12, 'Angular');
console.log(s1);
s1.greetings(p2);
