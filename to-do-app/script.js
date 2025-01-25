// Step 1: Get References to HTML Elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Step 2: Add Event Listener to the Add Task Button
addTaskButton.addEventListener("click", () => {
    // Get the task input value
    const taskText = taskInput.value.trim(); // Trim removes extra spaces

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Step 3: Create a New Task Item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Step 4: Add a Delete Button to the Task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Add delete functionality
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Step 5: Add the Task to the List
    taskList.appendChild(taskItem);

    // Step 6: Clear the Input Field
    taskInput.value = "";
});
