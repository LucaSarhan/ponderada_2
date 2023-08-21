document.addEventListener("DOMContentLoaded", function () {
  // Get references to various elements
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const addCompletedButton = document.getElementById("addCompletedButton");
  const deleteCompletedButton = document.getElementById("deleteCompletedButton");
  const taskList = document.getElementById("taskList");
  const taskList2 = document.getElementById("taskList2");

  // Event listener for adding a task
  addTaskButton.addEventListener("click", function () {
    event.preventDefault(); // Prevent form submission
    const taskName = taskInput.value;

    if (taskName) {
      // Create a new list item for the task
      const listItem = document.createElement("li");
      listItem.innerHTML = `<input type="checkbox"><label>${taskName}</label>`;
      taskList.appendChild(listItem);
      taskInput.value = ""; // Clear the input field
    }
  });

  // Event listener for moving tasks to the "Done" list
  addCompletedButton.addEventListener("click", function () {
    const selectedTasks = Array.from(taskList.querySelectorAll("input[type='checkbox']:checked"));
    selectedTasks.forEach(task => {
      const listItem = task.parentElement;
      taskList.removeChild(listItem); // Remove from "To-Do" list
      taskList2.appendChild(listItem); // Add to "Done" list
    });
  });

  // Event listener for deleting completed tasks
  deleteCompletedButton.addEventListener("click", async function () {
    const selectedCompletedTasks = Array.from(taskList2.querySelectorAll("input[type='checkbox']:checked"));

    // Loop through the selected completed tasks and remove them from the list
    selectedCompletedTasks.forEach(task => {
      const listItem = task.parentElement;
      taskList2.removeChild(listItem); // Remove from "Done" list

      // Delete the task from Supabase (using the deleteTask endpoint)
      const taskId = listItem.dataset.taskId; // Assuming you have a data-task-id attribute
      if (taskId) {
        deleteTask(taskId);
      }
    });
  });

  // Event listener for toggling dark mode
  const toggleDarkModeButton = document.getElementById("toggleDarkMode");
  toggleDarkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
