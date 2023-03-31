const button = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const ul = document.querySelector("#ul");

button.onclick = () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
  } else {
    alert("Enter a value");
  }
  input.value = "";
};
