let val;

const list = document.querySelector('header');
const listItem = document.querySelector('h1:first-child');

val = listItem;
val = list.childNodes; //算上html中换行
val = list.children; //返回html collection

val = list.children[0].textContent = 'world';
val = list.firstElementChild;
val = list.childElementCount;

//parent
val = listItem.parentNode;
val = listItem.parentElement;

//find next sibling
val = listItem.nextElementSibling;
val = listItem.previousElementSibling;

//console.log(val);

//027
//Replace element
//1.create element
const newHeading = document.createElement('h2');
//2.add id
newHeading.id = 'task-title';
//3.new text node
newHeading.appendChild(document.createTextNode('child'));
//newHeading.innerHTML = 'children';
//4.get old heading
const oldHeading = document.querySelector('h1:nth-child(2)');
//5.parent 
const header = document.querySelector('header');
//6.replace
header.replaceChild(newHeading, oldHeading);

//console.log(newHeading); 
//Remove element
const lis = document.querySelectorAll('h1');
const headers = document.querySelector('header');

lis[1].remove();
//remove child 
headers.removeChild(lis[2]);

//Class attr
const firstH1 = document.querySelector('h1:first-child');

let h1;
//classes
h1 = firstH1.classList;
firstH1.classList.add('test');
firstH1.classList.remove('test');
h1 = firstH1;
//attributes
h1 = firstH1.getAttribute('href');
firstH1.setAttribute('href', 'http://google.com ')
h1 = firstH1.hasAttribute('href');
firstH1.removeAttribute('href');
h1 = firstH1;
console.log(h1);