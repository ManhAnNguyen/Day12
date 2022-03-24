const body = document.querySelector("body");

body.innerHTML = `
  <button class = "add-btn">Add</button>
  <h3>Todo List</h3>
   <div class = 'todo-container'></div>
`;

const addBtn = document.querySelector(".add-btn");
const todoContainer = document.querySelector(".todo-container");

addBtn.addEventListener("click", () => {
  const todo = prompt("enter here"); //enter

  const h4 = document.createElement("h4");
  h4.innerHTML = `
   <span>${todo}</span>
   <button class = 'delete'>Delete</button>
  `;

  todoContainer.appendChild(h4);

  const deleteBtn = document.querySelectorAll(".delete");

  deleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentElement;
      parent.remove();
    });
  });
});
