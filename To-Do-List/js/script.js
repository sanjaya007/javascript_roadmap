//Selector

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listener
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(){

    //Prevent form from submitting
    event.preventDefault();

    //Create main DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

    //Add todo to local storage
    saveLocalTodos(todoInput.value);

    //Create Button (Check Button)
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Create Button (Trash Button)
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // All append to list
    todoList.appendChild(todoDiv);

    //Clear To-Do Input Value
    todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;

    //Delete To-DO
    if (item.classList[0] === 'trash-btn'){
        const parent = item.parentElement;

        //Animation
        parent.classList.add('fall');
        removeLocalTodos(parent);
        parent.addEventListener('transitionend', function(){
            parent.remove();    
        });
    }

    //Check Mark To-Do
    if (item.classList[0] === 'complete-btn'){
        const parent = item.parentElement;
        parent.classList.toggle('completed');
    }
}

// FIlter all, completed, uncompleted 

function filterTodo(e){
    const todos = todoList.childNodes;

    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveLocalTodos(value){

    let todosLocal;

    //Check

    if(localStorage.getItem('todos') === null)
    {
        todosLocal = [];
    }else{
        todosLocal = JSON.parse(localStorage.getItem("todos"));
    }

    todosLocal.push(value); 
    localStorage.setItem("todos", JSON.stringify(todosLocal));

}

function getTodos(){
    let todosLocal;
    
    //Check

    if(localStorage.getItem('todos') === null)
    {
        todosLocal = [];
    }else{
        todosLocal = JSON.parse(localStorage.getItem("todos"));
    }

    todosLocal.forEach(function(todoLocal){

        //Create main DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //Create li
        const newtodo = document.createElement('li');
        newtodo.innerText = todoLocal;
        newtodo.classList.add('todo-item');
        todoDiv.appendChild(newtodo);

       

        //Create Button (Check Button)
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        //Create Button (Trash Button)
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // All append to list
        todoList.appendChild(todoDiv);

    });
}

function removeLocalTodos(parent){
    let todosLocal;

    if(localStorage.getItem('todos') === null)
    {
        todosLocal = [];
    }else{
        todosLocal = JSON.parse(localStorage.getItem("todos"));
    }

    const childIndex = parent.children[0].innerText;
    todosLocal.splice(todosLocal.indexOf(childIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todosLocal));
}