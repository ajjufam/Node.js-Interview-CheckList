// Callbacks
//     A callback is a function passed as an argument to another function and is called later
//     (after some operation completes).

//     Why ?
//     * To handle asynchronous operations (like API calls, reading files).
//     * To execute code in order — like “do this, then do that”.

// Ex
function person(name, callback) {
  console.log("Hello", name);
  callback();
}

function process() {
  console.log("Bye");
}

person("Ajju", process);

setTimeout(function () {
  console.log("Set timeout Callback");
}, 2000);
