// Error Handling
//     the process of anticipating, detecting, and resolving errors that may occur during the execution of a program.
//     It is crucial for building robust and reliable applications. Proper error handling prevents unexpected crashes,
//     provides meaningful feedback to users, and helps in debugging and maintaining the codebase.

//     Why?
//     * Prevent app from crashing
//     * Show helpful messages to users
//     * Log issues for debugging
//     * Handle unexpected inputs or failures

// Ex 1 (In Plain Node.js)
try {
  // risky operation
  throw new Error("Something went wrong!");
} catch (err) {
  console.error("Caught Error:", err.message);
}

// Ex 2 ( In Express (Custom Error Handling Middleware))
// c22.custom_error.js

// Ex 3 ( Bonus: Custom Error Class (Optional))
// c222.custom_error.js
