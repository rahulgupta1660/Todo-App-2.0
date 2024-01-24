let input = document.querySelector("input");

let btn = document.querySelector("button");

let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  if (input.value != "") {
    let li = document.createElement("li");
    li.innerText = input.value;
    let close = document.createElement("button");
    close.classList.add("close");
    close.innerText = "X";
    li.appendChild(close);
    ul.appendChild(li);
  }
  input.value = "";
});

ul.addEventListener("click", (event) => {
  if (event.target.className === "close") {
    event.target.parentElement.remove();
  }
});
