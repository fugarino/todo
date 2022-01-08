//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoApp = document.querySelector(".todo");

//EventListeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(e) {
  //Prevents form from submitting
  e.preventDefault();
  if (todoInput.value === "") {
    const invalidDiv = document.createElement("div");
    invalidDiv.classList.add("invalid-div");
    invalidDiv.innerText = "Invalid Input";
    todoApp.append(invalidDiv);
    setTimeout(function () {
      invalidDiv.remove();
    }, 500);
  } else {
    //Create a div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    //Create a li within div
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-li");
    todoLi.innerText = todoInput.value;
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
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-button") {
    item.parentElement.remove();
  }
  if (item.classList[0] === "complete-button") {
    item.parentElement.classList.toggle("complete");
  }
}
