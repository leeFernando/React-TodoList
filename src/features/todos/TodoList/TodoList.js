import React, { Component } from 'react'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as TodoApi from './api';

class TodoList extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.loadTodos();
  }

  // no need to bind this as it's called inside TodoList
  async loadTodos() {
    let todos = await TodoApi.getTodos();
    this.setState({ todos });
  }

  // because need to bind this but called within TodoForm
  addTodo = async (val) => {
    let todo = await TodoApi.addTodo(val);
    this.setState(state => ({ todos: [...state.todos, todo] }));
  }

  async deleteTodo(id) {
    await TodoApi.deleteTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    console.log(todos);
    this.setState({ todos });
  }

  async toggleTodo(todo) {
    let modifiedTodo = await TodoApi.toggleTodo(todo);
    const todos = this.state.todos.map(t => (t._id === todo._id ? modifiedTodo : t));
    this.setState({ todos });
  }

  render() {
    const todos = this.state.todos.map(t => (
      <TodoItem
        key={t._id}
        onDelete={() => this.deleteTodo(t._id)}
        onToggle={() => this.toggleTodo(t)}
        {...t} />
    ));

    return (
      <div>
        <header>
          <h1>todo<span>list</span></h1>
          <h2>A simple todo list app built with node</h2>
        </header>
        <TodoForm addTodo={this.addTodo} />
        <ul className='list'>
          {todos}
        </ul>
      </div>
    )
  }
}

export default TodoList;