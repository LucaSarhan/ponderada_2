// Import the required modules
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Create an instance of the Express app
const app = express();

app.use(express.json());
app.use(express.static('public'))

// Set the port number for the server to listen on
const port = 3000;

const supabaseUrl = 'https://ifgssworcxftvdnuagpj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZ3Nzd29yY3hmdHZkbnVhZ3BqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjI5MzgyOSwiZXhwIjoyMDA3ODY5ODI5fQ.1dzWWPfCEWshno86HcHgLyuHpcOUNeqlRrJgGrI9-Ls';
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

async function createRecord() {
  const { error } = await supabase
  .from('Tasks')
  .insert({name: 'taskName' })
}

// async function deleteTask(taskId) {
//   try {
//     const { data, error } = await supabase
//       .from('Tasks')
//       .delete()
//       .eq('id', taskId);

//     if (error) {
//       console.error('Error deleting task:', error.message);
//     } else {
//       console.log('Task deleted successfully');
//     }
//   } catch (error) {
//     console.error('Error deleting task:', error.message);
//   }
// }


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
