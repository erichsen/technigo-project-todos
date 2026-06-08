import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <p className="empty">No todos here!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
