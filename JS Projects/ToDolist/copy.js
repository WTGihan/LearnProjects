// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions

function addTodo(event) {
    // console.log("hello world");

    // Prevent form from submitting
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    // ADD TODO TO LOCAL STORAGE
    saveLocalTodo(todoInput.value);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append To List
    todoList.appendChild(todoDiv);

    //Appent Todo INPUT VALUE

    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;

    // DELTE TODO
    if(item.classList[0] == 'trash-btn') {
        const todo = item.parentElement;

        // Animation here
        todo.classList.add("fall");  //class add to the tag

        removeLocalTodos(todo);
        
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //CHECK MARK
    if(item.classList[0] == 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function  filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all":
                 todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodo(todo) {
    
    //CHECK--HEY Do I already have thing in there?
    let todos;
    if(localStorage.getItem('todos') == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    
    //CHECK--HEY Do I already have thing in there?
    let todos;
    if(localStorage.getItem('todos') == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create LI
        const newToDo = document.createElement('li');
        newToDo.innerText = todo;
        newToDo.classList.add('todo-item');
        todoDiv.appendChild(newToDo);

        //Check Mark Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class = "fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);


        //Check Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //Append To List
        todoList.appendChild(todoDiv);
    });
}


function removeLocalTodos(todo) {

    //CHECK--HEY Do I already have thing in there?
    let todos;
    if(localStorage.getItem('todos') == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // console.log(todo.children[0].innerText);
    const todoIndex = todo.children[0].innerText;
    // console.log(todos.indexOf("apple"));

    // todo.splice(position, howmany items deleted)
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));  
    console.log(todos);

}

// const todos = ['apple', 'john', 'donut', 'babyboy'];

// const johnIndex = todos.indexOf('john');

// todos.splice(johnIndex, 1);

// console.log(todos);