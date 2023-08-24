import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://ifgssworcxftvdnuagpj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZ3Nzd29yY3hmdHZkbnVhZ3BqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjI5MzgyOSwiZXhwIjoyMDA3ODY5ODI5fQ.1dzWWPfCEWshno86HcHgLyuHpcOUNeqlRrJgGrI9-Ls';
const supabase = createClient(supabaseUrl, supabaseKey);

// Get references to various elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const addCompletedButton = document.getElementById("addCompletedButton");
const deleteCompletedButton = document.getElementById("deleteCompletedButton");
const taskList = document.getElementById("taskList");
const taskList2 = document.getElementById("taskList2");

async function fetchData() {
  const { data, error } = await supabase
  .from('TODOLIST')
  .select()

  if (data){

  console.log(data)

  taskList.innerHTML = "";
  taskList2.innerHTML = "";

  // Create a new list item for the task
  data.forEach(dados => {
    const id = dados.id
    const tasks = dados.tasks;
    const is_completed = dados.is_completed
    
    if (is_completed == 0){
      const listItem = document.createElement("li");
      listItem.innerHTML = `<input id="${id}" type="checkbox"><label>${tasks}</label>`;
      taskList.appendChild(listItem);
    }

    if (is_completed == 1){
      const listItem = document.createElement("li");
      listItem.innerHTML = `<input id="${id}" type="checkbox"><label>${tasks}</label>`;
      taskList2.appendChild(listItem);
    }
  });
  }
}

// Event listener for adding a task
addTaskButton.addEventListener("click", async function () {
  const taskName = taskInput.value;

  if (taskName) {
    const { error } = await supabase
    .from('TODOLIST')
    .insert({ tasks: taskName });
    fetchData();
  }

  taskInput.value = "";
});

async function updateData(id) {
  const { data, error } = await supabase
  .from('TODOLIST')
  .update({is_completed: 1})
  .eq('id', id).select()
}

// Event listener for moving tasks to the "Done" list
addCompletedButton.addEventListener("click", async function () {
  const selectedTasks = Array.from(taskList.querySelectorAll("input[type='checkbox']:checked"));
  console.log(selectedTasks);

  for (let i=0; i < selectedTasks.length; i++) {
    const task = selectedTasks[i];
    const listItem = task.parentElement;
    const idItem = task.id;
    console.log(idItem);
    updateData(idItem)
  };

  setTimeout(() => {
    fetchData();
  }, 500);

});

async function deleteData(id){
  const { error } = await supabase
  .from('TODOLIST')
  .delete()
  .eq('id', id)
}

// Event listener for deleting completed tasks
deleteCompletedButton.addEventListener("click", async function () {
  const selectedCompletedTasks = Array.from(taskList2.querySelectorAll("input[type='checkbox']:checked"));
  console.log(selectedCompletedTasks)
  for (let i=0; i < selectedCompletedTasks.length; i++) {
    const task = selectedCompletedTasks[i];
    const listItem = task.parentElement;
    const idItem = task.id;
    console.log(idItem);
    deleteData(idItem)
  };

  setTimeout(() => {
    fetchData();
  }, 500);
});

// Event listener for toggling dark mode
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
toggleDarkModeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
})