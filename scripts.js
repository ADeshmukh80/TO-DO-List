// Get references to the input box and the list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write somethings!"); // Alert the user if nothing is written
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set the list item text to the input value
        listContainer.appendChild(li); // Append the new list item to the list container
        
        // Create a span for the delete button (×)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Set the content of the span to '×'
        li.appendChild(span); // Append the span to the list item
    }
    inputBox.value = ""; // Clear the input box
    saveData(); // Save the current list to localStorage
}

// Add an event listener to the list container for click events
listContainer.addEventListener("click", function (e) {
    // Check if a list item was clicked
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the 'checked' class on the list item
        saveData(); // Save the updated list to localStorage
    }
    // Check if the delete button (span) was clicked
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the parent list item
        saveData(); // Save the updated list to localStorage
    }
}, false);

// Function to save the current list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Store the innerHTML of the list in localStorage
}

// Function to show tasks saved in localStorage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // Retrieve and set the list container's innerHTML
}

// Call showTask to display any saved tasks
showTask();
