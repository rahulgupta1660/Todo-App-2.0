let input = document.querySelector("input");

let btn = document.querySelector("button");

let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  if (input.value != "") {
    let li = document.createElement("li");
    let close = document.createElement("button");
    li.innerText = input.value;
    close.innerText = "X";
    close.classList.add("close");
    ul.appendChild(li);
    li.appendChild(close);
  }
  input.value = "";
});

ul.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove();
    console.log(event);
  }
});
