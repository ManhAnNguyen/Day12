//homework1

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <!-- 1 -->
    <div class="item"></div>
    <button class="btn" typeButton="circle">Circle</button>
    <button class="btn" typeButton="disappear">Disappear</button>
    <button class="btn" typeButton="change-color">Change color</button>
    <button class="btn" typeButton="bigger">Bigger</button>
    <script src="./app.js"></script>
  </body>
</html>

<script>

    const buttons = document.querySelectorAll(".btn");
const item = document.querySelector(".item");

const types = [
  {
    class: "circle-className",
    typeName: "circle",
  },
  {
    class: "disappear-className",
    typeName: "disappear",
  },
  {
    class: "changeColor-className",
    typeName: "change-color",
  },
  {
    class: "bigger-className",
    typeName: "bigger",
  },
];

buttons.forEach((btn) => {
  btn.onclick = () => {
    const typeBtn = btn.getAttribute(["typeButton"]);
    const chooseType = types.find((t) => t.typeName === typeBtn);
    types.forEach((t) => {
      item.classList.remove(t.class);
    });
    item.classList.add(chooseType.class);
  };
});

</script>

//DOM Event

//click

Element.addEventListener("click", () => {
alert("Hello");
});

//onchange

const input = document.querySelector(".input");
const button = document.querySelector("button");

input.addEventListener("change", (e) => {
const value = e.target.value;
button.addEventListener("click", () => {
alert(value);
});
});

//submit
form.addEventListener("submit", (e) => {
e.preventDefault();//
console.log("submit");
});
