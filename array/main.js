// console.log("JavaScript");

// // Lists contain similar items
// let numbers = [0, 1, 2, 3, 4];

// let names = ["Alice", "Bobby", "Charles", "Diana", "Eva"];

// console.log(names[0]);
// console.log(numbers[2]);

// // how to fix and change value for some items

// names[4] = "Evelyn";
// console.log(names);
// // How to add new items to list

// let newperson = "Frank";
// names.push(newperson);
// names.push("Grace");
// console.log(names);

// let newnumber = 5;
// numbers.push(newnumber);
// numbers.push(6);
// numbers.push(7);
// console.log(numbers);

// // How to delete some value
// // Delete item in index, how many items to delete
// names.splice(6)
// console.log(names);

// names.splice(0,1)
// console.log(names);

let todos = [
  "clean room",
  "doing homework",
  "playing games",
  "watching movie",
  "coding",
];

console.log(todos.length);

for (let i = 0; i < todos.length; i++) {
  console.log(i);
  console.log(todos[i]);
}
function renderTodo() {
  let todolistContainElement = document.getElementById("list-contain");
  todolistContainElement.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    todolistContainElement.innerHTML += `<li> ${todos[i]} <button onclick = 'deletetodo(${i})'>Delete</button></li>`;
  }
}
renderTodo();

let addButtonElement = document.getElementById("add-contain");

function addTodoEvent() {
  console.log("Add to do");
  let todoInputElement = document.getElementById("todo-contain");
  let todoValue = todoInputElement.value;

  todos.push(todoValue);
  console.log(todos);
  renderTodo();
}

addButtonElement.onclick = addTodoEvent;

function deletetodo(index){
    todos.splice(index,1);
    renderTodo();
}