"use strict";
// 2. Написать функцию
// let adder = makeAdder();
// adder(1) // 1
// adder(2) // 3
// adder(8) // 11

let adder = makeAdder();

function makeAdder() {
    let curr = 0;
    return function (a) {
        return curr += a;
    }
}

console.log(adder(1));
console.log(adder(2));




let counter = createCounter(10);

function createCounter(param) {
    let count = param;
    return {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        },
        gerCurrent: function () {
            return count;
        },
        setValue: function (val) {
            return count = val;
        },
        reset: function () {
            return count = c;
        }
    }
}

console.log(counter.gerCurrent());
console.log(counter.increment())
console.log(counter.gerCurrent());
console.log(counter.decrement())// 10;
console.log(counter.decrement()) // 9;
console.log(counter.gerCurrent());
console.log(counter.setValue(90));
console.log(counter.gerCurrent());
console.log(counter.reset()) // 10; // reset to initial value that was passed to createCounter function
console.log(counter.gerCurrent()) // 10;

