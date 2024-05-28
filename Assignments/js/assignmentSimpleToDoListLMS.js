


// const task_Input = document.getElementById("task-input");
// const add_TaskBtn = document.getElementById("add-task-btn");
// const task_List = document.getElementById("task-list");
// add_TaskBtn.addEventListener("click", function() {
//   const taskText = task_Input.value;
//   if (taskText.trim() !== "") {
//     const taskItem = document.createElement("li");
//     taskItem.innerText = taskText;
//     taskItem.addEventListener("click", function() {
//       taskItem.remove();
//     });
//     task_List.appendChild(taskItem);
//     taskInput.value = "";
//   }
// });

// {
// const taskInput = document.getElementById("task-input");
// const addTaskBtn = document.getElementById("add-task-btn");
// const taskList = document.getElementById("task-list");
// addTaskBtn.addEventListener("click", function() {
//   const taskText = taskInput.value;
//   if (taskText.trim() !== "") {
//     const taskItem = document.createElement("li");
//     taskItem.innerText = taskText;
//     taskItem.addEventListener("click", function() {
//       taskItem.remove();
//     });
//     taskList.appendChild(taskItem);
//     taskInput.value = "";
//   }
// });
// taskList.addEventListener("click", function(event) {
//   if (event.target.tagName.toLowerCase() === "li") {
//     event.target.remove();
//   }
// });
// }

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    taskItem.addEventListener("click", function() {
      taskItem.remove();
    });
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});
taskList.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "li") {
    event.target.remove();
  }
});