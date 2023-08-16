// This event listener waits for the DOM to be fully loaded before executing the enclosed code
document.addEventListener("DOMContentLoaded", function () {

  // Get references to various elements on the page using their IDs
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const addCompletedButton = document.getElementById("addCompletedButton");
  const taskList = document.getElementById("taskList");
  const taskList2 = document.getElementById("taskList2");

  // Add a click event listener to the "Add Task" button
  addTaskButton.addEventListener("click", function () {
    // Get the value of the task input field
    const taskName = taskInput.value;

    // Check if the task name is not empty
    if (taskName) {
      // Create a new <li> element with a checkbox and label, and add it to the "To-Do" list
      const listItem = document.createElement("li");
      listItem.innerHTML = `<input type="checkbox"><label>${taskName}</label>`;
      taskList.appendChild(listItem);

      // Clear the input field after adding the task
      taskInput.value = "";
    }
  });

  // Add a click event listener to the "Move to Done" button
  addCompletedButton.addEventListener("click", function () {
    // Get an array of selected tasks (checkboxes that are checked) in the "To-Do" list
    const selectedTasks = Array.from(taskList.querySelectorAll("input[type='checkbox']:checked"));

    // Loop through the selected tasks and move them from the "To-Do" list to the "Done" list
    selectedTasks.forEach(task => {
      const listItem = task.parentElement;
      taskList.removeChild(listItem);
      taskList2.appendChild(listItem);
    });
  });

  // Get a reference to the dark mode button
  const toggleDarkModeButton = document.getElementById("toggleDarkMode");

  // Add a click event listener to the dark mode button
  toggleDarkModeButton.addEventListener("click", function () {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle("dark-mode");
});
});
