let sherlock = {
    surname: 'Holmes',
    address: {
        street: 'Baker',
    },
    greetings: (b = 'amigo') => {
        console.log('Hola ' + b);
    },
};

sherlock.address.number = '221B';
sherlock.address.city = 'London';

sherlock.greetings();
sherlock.greetings('Pepe');
sherlock.greetings('Pepe', 'Ernesto');

let john = {};
john.address = { ...sherlock.address, city: 'Londres' };
john.address = JSON.parse(JSON.stringify(sherlock.address));

//En HTML-JS john.address = (sherlock.address);

// let algo
// console.log(algo)
let obj = {};
console.log(obj.algo?.foo?.bar);

obj.initialDate = new Date();
console.log(obj);
let objClon = JSON.parse(JSON.stringify(obj));
objClon.initialDate = new Date(objClon.initialDate);
console.log(objClon);
