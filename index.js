//import
const todoList = require("./store.js")

console.log("Hello World")

class Todo {
    constructor(id, task, completed) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }

    addTodo(todoItem) {
        todoList.push(todoItem)
    }

    removeTodoById(id) {
        const index = todoList.findIndex((item) => item.id === id);
        todoList.splice(index, 1);
    }

    updateTodo(id, newTodoItem) {
        const index = todoList.findIndex((item) => item.id === id);
        todoList[index] = newTodoItem;
    }

    clearAll() {
        todoList.length = 0;
    }

    findTodoById(id) {
        return todoList.find((item) => item.id === id);
    }

    filterTodoByCompletedFalse() {
        return todoList.filter((item) => !item.completed);
    }

    sortTodoListById() {
        todoList.sort((a, b) => a.id - b.id);
    }

}

const todoObj1 = new Todo();
const todoObj2 = new Todo();

const todo1 = new Todo(1, "todo", false);
const todo2 = new Todo(2, "crud", false);
const todo3 = new Todo(3, "counter", true);

todoObj1.addTodo(todo1)
todoObj1.addTodo(todo3)
todoObj1.addTodo(todo2)

todoObj2.addTodo(todo3)
todoObj2.addTodo(todo2)

console.log("After Add in first obj: ")
console.log(todoObj1)
console.log("After Add in second obj: ")
console.log(todoObj2)

todoObj1.sortTodoListById()
console.log("After sort id asc: ")
console.log(todoObj1)

todoObj1.removeTodoById(2);
console.log("After remove: ")
console.log(todoObj1)

todoObj1.updateTodo(1, todo2)
console.log("After update: ")
console.log(todoObj1)

console.log("After Filer by coompleted false: ")
console.log(todoObj1.filterTodoByCompletedFalse())
// console.log(todoList)

todoObj1.findTodoById(2);
console.log("After Find: ")
console.log(todoObj1.findTodoById(2))

todoObj1.clearAll();
console.log("After clear: ")
console.log(todoObj1)





