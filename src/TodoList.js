import React from 'react';
import './App.css';

function TodoList(props) {
  return (
    <div className="todoList">
      {
        props.todos.map(el => <li key={el.id}>
          {el.name}
          {el.done ? '✅' : '❌'}
          <button onClick={() => props.onDoneTask(el.id)}>Done</button>
        </li>)
      }
    </div>
  );
}

export default TodoList;
