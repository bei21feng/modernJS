// const form = document.querySelector('form');
// const taskInput = document.querySelector('#task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

//taskInput.value = ''; //提交后设为空

//form.addEventListener('submit', runEvent);
//taskInput.addEventListener('keydown', runEvent);
//keyup
//taskInput.addEventListener('copy', runEvent);
//keypress
/*
select.addEventListener('change ', runEvent);

function runEvent(e) {
    //heading.innerText = e.target.value;

    console.log(e.target.value);

    console.log(`EVENT TYPE : ${e.type}`);
    // console.log(taskInput.value); 

    //e.preventDefault();
}
*/

//031

//Event Bubbling
// document.querySelector('.card-title').addEventListener('click', () => {
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', () => {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', () => {
//     console.log('card');
// });
// document.querySelector('.col').addEventListener('click', () => {
//     console.log('col');
// });

//Delegation
document.body.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('card-content')) {
        console.log('delete item');
    }
});