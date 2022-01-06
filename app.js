//Selectors
const todoInput = document.querySelector(".todo-input");
const todoAdd = document.querySelector(".todo-add");
const todoList = document.getElementById("todo-list");

//Functions
function getUserInput() {
  todoAdd.addEventListener("click", () => {
    const userInput = todoInput.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = userInput;
    todoList.append(newLi);
  });
}
getUserInput();
