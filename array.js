const h1 = document.getElementById("h1");
const button = document.querySelector("button");
const remove = document.querySelector("#removebtn");
const input = document.querySelector("#input");
const ul = document.querySelector(".ul");
const newValue = document.createElement("li");

console.log(ul);
console.log(h1);
console.log(input);
console.log(button);
console.log(remove);

h1.onmouseover = () => {
  h1.style.color = "gold";
  h1.style.fontSize = "2rem";
};
h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontSize = "1.9rem";
};
button.onclick = () => {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
  } else {
    alert("Enter a value");
  }
  input.value = "";
};

ul.onmouseover = () => {
  ul.style.border = "3px solid red";
};
ul.onmouseout = () => {
  ul.style.border = "none";
};

remove.onclick = () => {
  ul.lastElementChild.remove();
};
