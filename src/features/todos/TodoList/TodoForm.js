import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    inputValue: ''
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit = e => {
    if (e.key === 'Enter')
      if (this.state.inputValue) {
        this.props.addTodo(this.state.inputValue);
        this.setState({ inputValue: '' });
      }
  }

  render() {
    return (
      <section className='form'>
        <input
          type="text"
          id="todoInput"
          placeholder="Insert your task here..."
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
        />
      </section>
    )
  }
}

export default TodoForm;