import React, {useState} from 'react'

function TodoList() {

    const[tasks, setTasks] = useState(["ABC"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function AddTask(){
      if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        //setTasks([...tasks, newTask])
        setNewTask("");
      }
    }

    function deleteTask(index){
      // const updatedTasks = tasks.filter((element, i) => i !== index);
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }

    function moveTaskup(index){
        if(index > 0){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
          setTasks(updatedTasks);
        }
    }

    function moveTaskdown(index){
      if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
    }

  return (
    <div className='to-do-list'>
        <h1>TO-DO-LIST</h1>

        <div>
            <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={AddTask}>Add</button>
        </div>
        <ol>
          {tasks.map((task, index) =>
              <li key = {index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)}>
                  Delete
                </button>
                <button className="move-button" onClick={()=>moveTaskup(index)}>
                  UP
                </button>
                <button className="move-button" onClick={()=>moveTaskdown(index)}>
                  DOWN
                </button>
              </li>)}
        </ol>
      
    </div>
  )
}

export default TodoList
