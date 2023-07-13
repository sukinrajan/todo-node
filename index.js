const TodoList = require('./TodoList');
// class Todo extends TodoList{

//     constructor() {
//         super();
//       }
//     }

    const todoObj1 = new TodoList();
    const todoObj2 = new TodoList();
    
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
    
    todoObj1.addTodo(todo1)
    todoObj1.addTodo(todo3)
    todoObj1.addTodo(todo2)
    
    todoObj2.addTodo(todo3)
    todoObj2.addTodo(todo2)

    console.log("After getAll Function: ")
    console.log(todoObj1.getAllTodoList())
    
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
