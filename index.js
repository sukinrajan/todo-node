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
addTodo(todo2)
addTodo(todo3)
console.log("After Add: ")
console.log(todoList)

removeTodoById(2);
console.log("After remove: ")
console.log(todoList)

updateTodo(1,todo2)
console.log("After update: ")
console.log(todoList)

clearAll();
console.log("After clear: ")
console.log(todoList)



