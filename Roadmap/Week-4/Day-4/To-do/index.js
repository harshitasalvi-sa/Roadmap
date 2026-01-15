const inputBox = document.getElementById("input-box");
const dateBox = document.getElementById("date-box");
const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("edit-btn");

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add task
addBtn.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value === "") {
    alert("Please write something!");
    return;
  }

  const task = {
    id: Date.now(),
    text: inputBox.value,
    dueDate: dateBox.value,
    completed: false
  };

  tasks.push(task);
  saveAndRender();

  inputBox.value = "";
  dateBox.value = "";
}

//Render tasks on UI
function displayTasks() {
  pendingList.innerHTML = "";
  completedList.innerHTML = ""; //to clear and avoid duplicate values

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task.text}
      <div>
        ${task.dueDate ? `<small> Due: ${task.dueDate}</small>` : ""}
        <button id="edit-btn">Edit</button>
        <span>\u00d7</span>
      </div>
    `;

    //Task complete toggle
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN") return;
      task.completed = !task.completed;
      saveAndRender();
    });

    // Delete task
    li.querySelector("span").addEventListener("click", (e) => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveAndRender();
    });

    //-----------------------------------------EDIT TASK-----------------------------------------
    li.querySelector("button").addEventListener("click", (e) => {
      inputBox.value = task.text;
      tasks = tasks.filter(t => t.id !== task.id); 
      saveAndRender();
    });

    if (task.completed) {
      li.classList.add("checked");
      completedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
    
  });
}

// Save to localStorage
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

//ADD EVENT with ENTER key
inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
})

// Initial render
displayTasks();
