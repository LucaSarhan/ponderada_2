// Import necessary modules and libraries
const express = require("express");
const { createClient } = require("@supabase/supabase-js");

// Create an Express app instance
const app = express();
const port = 3000;

// Replace these with your Supabase project details
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_API_KEY";

// Create a Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware: Parse incoming JSON data
app.use(express.json());

// Define a POST route to handle adding tasks
app.post("/addTask", async (req, res) => {
  // Extract the task name from the request body
  const { taskName } = req.body;

  try {
    // Insert the task into the "tasks" table using Supabase
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ task_name: taskName }]);

    // Check for errors during the insertion
    if (error) {
      throw error;
    }

    // Send a successful response
    res.sendStatus(200);
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error adding task:", error);
    res.sendStatus(500);
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
