import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ todo, uid, removeItem, toggleItem }) => (
  <li className="list-group-item">
    <button
      className="btn btn-light circle"
      onClick={() => toggleItem(uid)} 
    >
      <i className={ todo.completed ? 'fas fa-check completed' : 'fas fa-check' }></i>    
    </button>
    <div className="content-box" onClick={() => toggleItem(uid)}>
      <span className={ todo.completed ? 'item-content item-completed' : 'item-content' }>
        { todo.title }
      </span>
    </div>
    <button
      className="btn btn-light no-border hidden"
      onClick={() => removeItem(uid)}  
    >
      <i className="fas fa-times"></i>    
    </button>  
  </li>
)

export default TodoListItem