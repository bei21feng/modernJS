// set local storage item
//localStorage.setItem('name', 'John');

// set session storage item
//sessionStorage.setItem('name', 'Beth');

// remove from storage
//localStorage.removeItem('name');

// get from storage
//const name = localStorage.getItem('name');

//clear local storage
//localStorage.clear();

//console.log(name);
document.querySelector('form').addEventListener('submit', (e) => {
    const task = document.querySelector('#task').value;

    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function (task) {
    console.log(task);
})