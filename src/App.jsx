import { useState } from "react"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { Filter } from "./components/Filter"
import "./index.css"

export const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Go for a walk", completed: false },
  ])
  const [filter, setFilter] = useState("all")

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  return (
    <div className="app">
      <h1>My Todos</h1>
      <TodoForm onAdd={addTodo} />
      <Filter current={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <p className="count">{todos.filter((t) => !t.completed).length} items left</p>
    </div>
  )
}
