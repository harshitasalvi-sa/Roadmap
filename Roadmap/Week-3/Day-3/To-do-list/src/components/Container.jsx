import "./Container.css";
import {useState, useEffect} from "react";
import Task from "./Task";

const Container = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");


    function handleAddTask(e){
        e.preventDefault();
        const taskObj = {
            id : Date.now(),
            currTask : task,
            currDate : date,
            isCompleted : false,
            isEditing : false,
        }

        setTasks([...tasks, taskObj]);
        setTask("");
        setDate("");
    }

    function toggleStatus(id) {
        setTasks(prev =>
        prev.map(task =>
            task.id === id
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        )
        );
    }

    // function editTask(currTask){

    //     setTasks(prev =>
    //         prev.map(task =>
    //         task.id === currTask.id
    //             ? { ...task, isEditing: !currTask.isEditing }
    //             : task
    //         )
    //     );
    // }

    // function updateTask(id, newText) {
    // setTasks(prev =>
    //     prev.map(task =>
    //     task.id === id
    //         ? { ...task, currTask: newText, isEditing: false }
    //         : task
    //     )
    // );
    // }

    function deleteTask(id){
       setTasks(prev => prev.filter(task => task.id !== id));
    }

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

  return (
    <div className="container">
        {/* <div>
            <form onSubmit={handleAddTask}>
                <input type="text" value={task} id="" onChange={e => setTask(e.target.value)} />
                <input type="date" value={date} id="" onChange={e =>setDate( e.target.value)}/>
                <input type="submit" value="Add Task" id="add-task-btn" />
            </form>
        </div> */}
        <form onSubmit={handleAddTask}>
            <input
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder="Task"
            id="task-input"
            />

            <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            />

            <input type="submit" value="Add Task" id="add-task-btn" />
        </form>

        <div className="tasks">
             <ul className="list">
                {tasks.length === 0 && <p>No tasks yet</p>}
                {tasks.filter(x => x.isCompleted == false).map((item, index)=>(
                        <Task
                        key={item.id}
                        task={item}
                        onDelete={deleteTask}
                        onToggle={toggleStatus}
                        // onEdit = {editTask}
                        // onUpdate={updateTask}
                        />
                ))}
                {tasks.filter(x => x.isCompleted==true).map((item, index)=>(
                        <Task
                        key={item.id}
                        task={item}
                        onDelete={deleteTask}
                        onToggle={toggleStatus}
                        // onEdit = {editTask}
                        // onUpdate={updateTask}
                        />
                ))}
             </ul>
        </div>
    </div>
  )
}

export default Container