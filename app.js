//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EventListeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(e) {
  //Prevent page from submitting
  e.preventDefault();
  //Create a div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  //Create a li within div
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoLi.innerText = "Hello World";
  todoDiv.appendChild(todoLi);
  //Create a complete btn within div alongside li
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completeButton);
  //Create a trash btn within div alongside li & complete btn
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);
  //Append todoDiv to todoList
  todoList.append(todoDiv);
  //Clear input after submit
  todoInput.value = "";
}
