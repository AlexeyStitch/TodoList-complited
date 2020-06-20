import React, {useState} from 'react';
import './App.css';

function CreateForm(props) {

  const [task, setTask] = useState('')

    const addTask = () => {
      console.log(task + 'createForm');
      props.onCreateTask(task)
        setTask('')
    }

  return (
    <div className="createForm">
      <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default CreateForm;
