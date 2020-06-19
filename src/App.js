import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";
import CreateForm from "./CreateForm";
import userEvent from "@testing-library/user-event";

const initialTodos = [
  {id: 1, name: 'Test1', done: false},
  {id: 2, name: 'Test2', done: false},
]

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const onCreateTask = (task) => {
    console.log(task + 'AppCreate')
    const updateOnCreateTask = [...todos];
    updateOnCreateTask.push({id: Math.random(), name: task, done: false})
    setTodos(updateOnCreateTask)
  }

  const onDoneTask = (id) => {
    const updateOnDoneTask = todos.map(el => {
      (el.done === el.id) return {...el, done: true}
      else return el;
    })
    setTodos(updateOnDoneTask)
  }

  return (
    <div className="App">
<TodoList todos={todos} onDoneTask={onDoneTask}/>
<CreateForm onCreateTask={onCreateTask}/>

    </div>
  );
}

export default App;
