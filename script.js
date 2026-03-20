// script.js

// This function runs immediately when the page loads
function greetUser() {
    // Prompt the user for their name
    let name = prompt("Enter your name:");

    // Validate input
    if (!name || name.trim() === "") {
        alert("Hello, Guest!");
    } else {
        alert(`Hello, ${name.trim()}!`);
    }
}

// Run the function when the DOM is ready
document.addEventListener("DOMContentLoaded", greetUser);