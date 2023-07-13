const todoList = require("./store.js")

class TodoList { 
    constructor() {
        this.todoList = [];
    }
    
    addTodo(todoItem) {
        this.todoList.push(todoItem)
    }

    removeTodoById(id) {
        const index = this.todoList.findIndex((item) => item.id === id);
        this.todoList.splice(index, 1);
    }

    updateTodo(id, newTodoItem) {
        const index = this.todoList.findIndex((item) => item.id === id);
        this.todoList[index] = newTodoItem;
    }

    clearAll() {
        this.todoList.length = 0;
    }

    findTodoById(id) {
        return this.todoList.find((item) => item.id === id);
    }

    filterTodoByCompletedFalse() {
        return this.todoList.filter((item) => !item.completed);
    }

    sortTodoListById() {
        this.todoList.sort((a, b) => a.id - b.id);
    }

}
    module.exports = TodoList;
