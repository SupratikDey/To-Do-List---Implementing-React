// I use App as the main component where I keep the todo data and the functions that modify it. I then pass the required data and functions to other components using props.
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();
    if (!newTask.trim()) return; 

    const newTodo = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTask("");
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  // Removes a task from the list
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEdit(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  return (
    <div className="app-container">
      <Header />

      <form className="add-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ToDoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}
export default App;
