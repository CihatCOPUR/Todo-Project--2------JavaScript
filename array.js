const button = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const ul = document.querySelector("#ul");

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

button.onclick = () => {
  if (input.value.trim() !== "") {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: input.value,
    };
    createListElement(newTodo);
    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos));
    console.log(todos);
  } else {
    alert("Enter a value");
  }
  input.value = "";
};

const createListElement = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const completeIcon = document.createElement("i");
  completeIcon.className = "fas fa-check";
  li.appendChild(completeIcon);
  ul.appendChild(li);
  console.log(li);

  newTodo.completed ? li.classList.add("completed") : "";

  const p = document.createElement("p");
  const todoText = document.createTextNode(newTodo.text);
  p.appendChild(todoText);
  li.appendChild(p);
  console.log(li);
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash";
  deleteIcon.style.color = "red";
  li.appendChild(deleteIcon);
};
const renderSaveTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};

renderSaveTodos();

window.onload = () => {
  input.focus();
};

ul.onclick = (e) => {
  console.log(e.target);
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("completed");
  }
};
