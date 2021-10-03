const todoSubmit = document.querySelector(".todobox");
const todoValue = document.querySelector(".todobox input");
const todoList = document.querySelector("#todo-list");
const todofirst = document.querySelector("#list1")

const todos_key = "todos";
let todos = [];

function saveTodo() {
    localStorage.setItem(todos_key, JSON.stringify(todos))
}



function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}


function makeList(newToDo) {
    const newLi = document.createElement("li")
    newLi.id = newToDo.id;
    const newSpan = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "✔️"
    button.addEventListener("click", deleteTodo)
    newLi.appendChild(newSpan);
    newLi.appendChild(button);
    newSpan.innerText = newToDo.text;
    todoList.appendChild(newLi);
   

}

function getToDo(event) {
    event.preventDefault();
    const newToDo = todoValue.value;
    todoValue.value =" Updated! Check your 'To Do'";
    todofirst.style.color = "green"
    todofirst.innerHTML = "Updated"
    const newTodoObj = {
        text:newToDo,
        id: Date.now(),
    };
    setTimeout(function() {
        todoValue.value ="";
        todofirst.innerHTML = "To Do"
        todofirst.style.color = "black"
      }, 2000);
      
    todos.push(newTodoObj)
    makeList(newTodoObj);
    saveTodo();
    

}



todoSubmit.addEventListener("submit", getToDo);


const savedToDos = localStorage.getItem(todos_key);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(makeList);
}


