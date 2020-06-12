// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
(function loadEventListeners() {
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filter.addEventListener('keyup', filterTasks);
})();

//get tasks from ls
function getTasks(e) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        //create li element
        const li = document.createElement('li');
        // add class
        li.classList.add('collection-item');
        //create text node
        li.textContent = task;
        //create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        //add icon HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);
        //append the li to ul
        taskList.appendChild(li);
    })
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task');
    }

    //create li element
    const li = document.createElement('li');
    // add class
    li.classList.add('collection-item');
    //create text node
    li.textContent = taskInput.value;
    //create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    //append the li to ul
    taskList.appendChild(li);

    //store in LS
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';
    //console.log(li);
    e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            //remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
    //method 1 不推荐
    //taskList.innerHTML = '';
    //method 2 faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //clear from LS
    clearTasksFromLocalStorage();
}

//remove from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}