const todoList = require("./store.js")

console.log("Hello World")

function addTodo(todoItem){
    todoList.push(todoItem)
}

function removeTodoById(id){
    const index = todoList.findIndex((item) => item.id === id);
      todoList.splice(index, 1);
}

function updateTodo(id, newTodoItem) {
    const index = todoList.findIndex((item) => item.id === id);
      todoList[index] = newTodoItem;
  }

  function clearAll(){
    todoList.length = 0;
  }

  function findTodoById(id) {
    return todoList.find((item) => item.id === id);
}

function filterTodoByCompletedFalse() {
    return todoList.filter((item) => !item.completed);
}

function sortTodoListById() {
    todoList.sort((a, b) => a.id - b.id);
}

const todo1 = {
    id: 1,
    task: "todo",
    completed: false,
  };

  const todo2 = {
    id: 2,
    task: "crud",
    completed: false,
  };

  const todo3 = {
    id: 3,
    task: "counter",
    completed: true,
  };
  
addTodo(todo1);
addTodo(todo3)
addTodo(todo2)

console.log("After Add: ")
console.log(todoList)

sortTodoListById()
console.log("After sort id asc: ")
console.log(todoList)

removeTodoById(2);
console.log("After remove: ")
console.log(todoList)

updateTodo(1,todo2)
console.log("After update: ")
console.log(todoList)

console.log("After Filer by coompleted false: ")
console.log(filterTodoByCompletedFalse())
// console.log(todoList)

findTodoById(2);
console.log("After Find: ")
console.log(findTodoById(2))

clearAll();
console.log("After clear: ")
console.log(todoList)