import React, { Component } from 'react'
import TodoList from '../features/todos/TodoList/TodoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}
