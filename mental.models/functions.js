function foo(a) {
    let b;
    b = a * a;
    return b;
}

const z = 2;
foo(z);

const obj = {
    name: 'Pepe',
    age: 23,
};

obj.isAlumno = true;
console.log(obj.name);

const prop = 'name';
console.log(obj[prop]);
console.log(obj.prop);

const numbers = [3, 5, 6];
console.log(numbers[0]);
numbers[numbers.length] = 8;
console.log(numbers);
numbers[numbers.length] = 9;

numbers.push(53);
numbers.findIndex();

const myPush = (array, value) => {
    array[array.length] = value;
};

let data = [];
data.shift();
myPush(data, 'Pepa');
console.log(data);
