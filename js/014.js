let val;
const today = new Date();
let birthday = new Date('9-10-1981');
birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday.setMonth(2); //三月 
//console.log(birthday);

val = birthday.getMonth(); //一月为0
//console.log(val);

//015
//TERNARY OPERATOR
const id = 100;
//console.log(id === 100 ? 'correct' : 'incorrect');

//017
function greet(name = 'defaultName') {
    return `hello ${name}`;
}
//console.log(greet('John'));

//immediatley invokable function expressions  -IIFEs 
//declaire and run at the same time
(function () {
    //console.log('IIFE run...');
})();

//018
for (let i = 0; i < 5; i++) {
    if (i == 2) {
        //console.log(`my favor ${i}`);
        continue;
    }
    //console.log(`number ${i}`);
}

// const car = ['Ford', 'Chevy', 'Honda'];
// car.forEach(function (current) { //常用变量cur
//     console.log(current);
// });

const users = [{
        id: 1,
        name: 'bill'
    },
    {
        id: 2,
        name: 'bier'
    }
];
const ids = users.map(function (cur) {
    return cur.id;
});
//console.log(ids);

for (let i in users) {
    console.log(car[i]);
}