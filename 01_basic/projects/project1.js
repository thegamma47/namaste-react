// Select elements
const inputField = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add a task when the button is clicked
addButton.addEventListener("click", function() {
    const task = inputField.value;

    if (task) {
        addTask(task);
        inputField.value = ''; // Clear input field
    }
});

// Add task function
function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    // Create a delete button for each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        li.remove(); // Remove task when delete button is clicked
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
