import { Component } from 'react'
import '../styles/globals.css'

export default class MyApp extends Component {
  state = {
    todos: [],
    text: '',
  }

  setText = (e) => this.setState({ text: e.target.value });

  addTodo = (e) => {
    e.preventDefault();
    let { todos, text } =  this.state;
    todos = todos.concat({ text });
    this.setState({ todos, text: '' });
  }

  deleteTodo = (index) => {
    const oldState = this.state.todos;
    this.setState({
      todos: [...oldState.slice(0, index), ...oldState.slice(index + 1)],
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addTodo}>
          <h1>Simplest (minimalism) todo ever</h1>
          <input onInput={this.setText} value={this.state.text} placeholder="ur fkg todo" />
          <button type="submit">Add</button>

          <ul>
            {this.state.todos.map((todo, index) => (
              <li key={index} onClick={() => this.deleteTodo(index)} >{todo.text}</li>
            ))}
          </ul>

        </form>

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </div>
    )
  }
}