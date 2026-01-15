import "./Task.css"
import {useState} from "react";
import editPencil from "../assets/pencil.png"

const Task = ({ task, onDelete, onToggle}) => {
  
  const [editedText, setEditedText] = useState(task.currTask);
  
  function handleSave() {
    if (!editedText.trim()) return;
    onUpdate(task.id, editedText);
  }

  return (
   <div className="li">
      <span>🌸</span>
     <li className={task.isCompleted ? "completed" : ""} key={task.id}>
      {/* {task.currTask} */}
      {task.isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <span>{task.currTask}</span>
      )}

      <div className="list-right">
        <button type="button" onClick={() => onToggle(task.id)}>
          {task.isCompleted ? "Completed" : "Pending"}
        </button>

        <span>{task.currDate}</span>

        <span onClick={() => onDelete(task.id)}>X</span>
      </div>
    </li>
   </div>
  );
};

export default Task;
