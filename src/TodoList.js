import React, {useState} from 'react';
import './App.css';

function TodoList(props) {

  const [editTask, setEditTask] = useState({})

    const onEditTaskChange = (e) => {
      setEditTask({...editTask, name: e.target.value})
    }

    const editMode = (task) => {
      setEditTask(task);
    }

    const onTaskSave = () => {
      props.onTaskSave(editTask);
      setEditTask({})
    }


    return (
        <div className="todoList">
            {
                props.todos.map(el => <li key={el.id}>{el.name}
                    {el.done ? '✅' : '❌'}
                    <button onClick={() => props.onDoneTask(el.id)}>Done</button>
                    <button onClick={() => props.onDeleteTask(el.id)}>
                        {el.done ? 'Done' : 'noDone'}
                    </button>
                    {
                        editTask.id === el.id
                        ? <><input type="text" value={editTask.name} onChange={onEditTaskChange}/>
                        <button onClick={onTaskSave} disabled={!editTask.name.trim('')}>Save</button>
                        </>
                        : <span onClick={() => editMode(el)}>{el.name}</span>
                    }
                </li>)
            }
        </div>
    );
}

export default TodoList;
