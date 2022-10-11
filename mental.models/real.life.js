import { name } from './constants.js';

const main = function () {
    function bar() {
        foo;
        console.log(name);
    }

    let foo;
    bar();
};

main();
