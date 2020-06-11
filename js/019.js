//window methods objects properties
//Promt
// const input = prompt();
// alert(input);

//Conform
// if (confirm('are you sure')) {
//     console.log('u are sure');
// } else {
//     console.log('not sure');
// }

//properties
let val;

//inner outer height and width
val = window.outerHeight;

//scroll points
val = window.scrollY;

//Location object
val = window.location.hostname;
//val = location.hostname;

//redirect
//location.href = 'http://google.com';

//History object 
//history.go(-1);

//navigator object
//val = navigator.appVersion;

//console.log(val);

//023
// val = document.querySelector('h1');
// document.querySelector('li:last-child').style.color = 'red';
// console.log(val);

// document.querySelectorAll('');
const items = document.querySelectorAll('li');
items.forEach(function (item, index) {
    item.textContent = `${index}:hello`;
});

const liOdd = document.querySelectorAll('h1:nth-child(odd)');
//liOdd.style.background = 'lightblue' 错误
// liOdd.forEach((item, index) => {
//     item.style.backgroundColor = 'lightblue';
// });
for (let i in liOdd) {
    liOdd[i].style.backgroundColor = 'lightblue';
}