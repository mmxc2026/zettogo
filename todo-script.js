// todo-script.js

// Function to add a todo
function addTodo(todo) {
    let todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
}

// Function to get all todos
function getTodos() {
    const todosJson = localStorage.getItem('todos');
    return todosJson ? JSON.parse(todosJson) : [];
}

// Function to save todos to local storage
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to delete a todo
function deleteTodo(index) {
    let todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
}

// Example usage:
addTodo('Learn about local storage');
addTodo('Build a todo list application');
console.log(getTodos());