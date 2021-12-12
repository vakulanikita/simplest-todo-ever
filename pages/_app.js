import React from 'react'
import '../styles/globals.css'

export default function MyApp() {
  const [todos, setTodos] = React.useState(['start a new life with the todo app']);
  const [text, setText] = React.useState('')

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText('');
  }

  const deleteTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
  }

  return (
    <div className="container">
      <form onSubmit={addTodo}>
        <h1>Simplest (minimalism) todo ever</h1>
        <input onInput={(e) => {setText(e.target.value)}} value={text} placeholder="what needs to be done" />
        <button type="submit">Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} onClick={() => deleteTodo(index)} >{todo}</li>
          ))}
        </ul>
      </form>
      <style global jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  )
}