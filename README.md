# Todos

A simple and clean todo app built with React and Vite. You can add, complete, and delete tasks, and filter the list by status.

## About the project

The assignment was to build a functional todo app using React. The focus was on understanding core React concepts like state management, component structure, props, and event handling.

The app is split into four components — `TodoForm`, `TodoList`, `TodoItem`, and `Filter` — each with a single responsibility. All state lives in `App`, which passes data down via props and receives changes back through callback functions.

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Filter by All / Active / Completed
- Live count of remaining items

## Tech used

- React 18
- Vite
- React Router DOM
- Plain CSS

## If I had more time

- Add notes/description to each todo
- Persist todos in localStorage so they survive a page refresh
- Drag to reorder todos
- Due dates

## View it live

https://technigo-project-todos.pages.dev/

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
