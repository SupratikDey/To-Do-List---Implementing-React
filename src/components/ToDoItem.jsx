// This component represents a single todo in the list.
// It lets me mark the todo as completed, edit its text, or delete it.
import { useState } from "react";

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  function saveEdit() {
    if (text.trim()) {
      onEdit(todo.id, text.trim());
    }
    setEditing(false);
  }

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {editing ? (
        <input
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

      <div className="todo-actions">
        {editing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}

        <button className="delete-btn" onClick={() => onDelete(todo.id)}> Delete </button>
      </div>
    </li>
  );
}

export default ToDoItem;