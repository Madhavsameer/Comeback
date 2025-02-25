// --- Session Storage Example ---
// Store a value in sessionStorage
sessionStorage.setItem("name", "Madhav");

// Retrieve the value from sessionStorage
const sessionUsername = sessionStorage.getItem("name");
console.log("Session Storage name is :", sessionUsername); // Output: "Alice"

// Remove a specific item from sessionStorage
// sessionStorage.removeItem("username");

// // Clear all items from sessionStorage (if needed)
// // sessionStorage.clear();


// // --- Local Storage Example ---
// // Store an object in localStorage (it must be converted to a string)
// const user = { name: "Alice", age: 30 };
// localStorage.setItem("user", JSON.stringify(user));

// // Retrieve the object from localStorage and parse it back to an object
// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log("Local Storage user:", storedUser); // Output: { name: "Alice", age: 30 }

// // Remove a specific item from localStorage
// localStorage.removeItem("user");

// // Clear all items from localStorage (if needed)
// // localStorage.clear();
