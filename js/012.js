//create array
const numbers = [12, 34, 56];
const numbers2 = new Array(5, 34, 56);
const mixed = [22, 'hello', undefined, true, null, {
    a: 1,
    b: 2
}, new Date()];
const fruit = ['apple', 'banana', 'pear'];
//console.log(mixed);

let val;

//get array length
val = numbers.length;
//check array
val = Array.isArray(numbers);
//get single value
val = numbers[2];
//Insert into array
numbers[1] = 10;
//find Index of value
val = numbers.indexOf(10);
//MUTATING ARRAY
//add on to end
numbers.push(23);
//add on to front
numbers.unshift(2);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values
numbers.splice(0, 1);
//reverse
numbers.reverse();

//CONCATENATE ARRAY
val = numbers.concat(numbers2);

//sorting array
val = fruit.sort(); //alphabeta order 
//sorting number
val = numbers2.sort(); //以第一个数字大小排列 
// use the "compare function"
val = numbers2.sort(function (x, y) {
    return x - y;
});
//reverse sort
val = numbers2.sort(function (x, y) {
    return y - x;
});

//Find
function under20(num) {
    return num < 20;
}

val = numbers.find(under20);

const num = [12, 2, 44, 4];
val = num.splice(-1);
// console.log(num);
// console.log(val);


// console.log(numbers);
// console.log(val);

//013
/*
const person = {
    hobbies: ['swim', 'run'],
    address: {
        state: 'FL',
        city: 'Miami'
    }
}
let bill = person;
console.log(bill.address.state);
console.log(bill.hobbies[0]);
*/
const person = [{
        name: 'bill',
        age: 21
    },
    {
        name: 'bier',
        age: 20
    }
];
for (let i in person) {
    console.log(person[i]);
}