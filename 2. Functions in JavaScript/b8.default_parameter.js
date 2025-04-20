// Default Parameters

// What ?
//     Default parameters allow you to set default values for function parameters if
//     no value or undefined is passed.

// Why ?
//     Used To avoid undefined values and make your function more reliable by setting fallback/defaults.

function person(name = "Guest") {
  console.log("Hello", name);
}

person("Ajju"); //Hello Ajju
person(); // Hello Guest
