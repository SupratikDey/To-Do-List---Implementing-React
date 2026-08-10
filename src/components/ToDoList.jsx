// This component **takes the todo list from `App` and displays each todo individually** using the `ToDoItem` component.
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return <p className="empty-msg">No tasks yet. Add one above!</p>;
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
export default ToDoList;
