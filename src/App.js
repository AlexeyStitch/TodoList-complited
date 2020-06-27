import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import CreateForm from "./CreateForm";

const initialTodos = [
    {id : 1, name: 'Test1', done: false},
    {id : 2, name: 'Test2', done: false},
]

function App() {
  const [todos, setTodos] = useState(initialTodos)

    const onCreateTask = (task) => {
      console.log(task);
      const updateOnCreateTask = [...todos];
      updateOnCreateTask.push({id: Math.random(), name: task, done: false})
        setTodos(updateOnCreateTask)
    }

    const onDeleteTask = (id) => {
      const updateOnDeleteTask = todos.filter(el => el.id !== id)
        setTodos(updateOnDeleteTask)
    }

    const onDoneTask = (id) => {
      const updateOnDoneTask = todos.map (el => {
          if(el.id === id) return {...el, done: !el.done}
          else return el;
      })
        setTodos(updateOnDoneTask)
    }

    const onTaskSave = (task) => {
        const updateOnTaskSave = todos.map (el => {
            if(el.id === task.id) return {...el, name: task.name}
            else return el;
        })
        setTodos(updateOnTaskSave)
    }

    return (
        <div className="App">
        <TodoList todos={todos} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask} onTaskSave={onTaskSave}/>
        <CreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;
