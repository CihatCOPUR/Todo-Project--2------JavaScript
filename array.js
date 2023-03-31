const button = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const ul = document.querySelector("#ul");

button.onclick = () => {
  if (input.value.trim() !== "") {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: input.value,
    };
    createListElement(newTodo);
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

  const p = document.createElement("p");
  const todoText = document.createTextNode(newTodo.text);
  p.appendChild(todoText);
  li.appendChild(p);

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash";
  li.appendChild(deleteIcon);
};
