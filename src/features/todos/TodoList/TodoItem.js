import React from 'react'

const TodoItem = ({ name, completed, onDelete, onToggle }) => (
  <li
    className={`task${completed ? ' done' : ''}`}
    onClick={onToggle}
  >
    {name}
    <span onClick={onDelete}>X</span>
  </li>
)

export default TodoItem;