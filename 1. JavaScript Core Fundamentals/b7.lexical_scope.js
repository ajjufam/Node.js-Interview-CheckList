// Lexical Scope
//      JavaScript functions are lexically scoped, meaning they remember the scope in which they were written,
//      not where they are called.
//      (ಜಾವಾಸ್ಕ್ರಿಪ್ಟ್ ಫಂಕ್ಷನ್‌ಗಳನ್ನು ಲೆಕ್ಸಿಕಲ್ ಆಗಿ ಸ್ಕೋಪ್ ಮಾಡಲಾಗುತ್ತದೆ, ಅಂದರೆ ಅವು ಅವುಗಳನ್ನು ಎಲ್ಲಿ ಕರೆಯಲಾಗುತ್ತದೆ
//      ಎಂಬುದರ ಬದಲು ಅವುಗಳನ್ನು ಬರೆಯಲಾದ ವ್ಯಾಪ್ತಿಯನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳುತ್ತವೆ.)

// ex 1
let global = 10; // Global Scope we can use anywhere
function a() {
  if (true) {
    console.log("Lexical (Global) :", global);
  }
}
a();

// ex 2
if (true) {
  let local = 30; // Block Scope we can use inside the scope
  console.log("Lexical Local", local); // 30 ,accessible
}
// console.log(local); //ReferenceError not accessible

// ex 3
{
  let block = 80;
  console.log("Lexical block", block); // 80 ,accessible
}
// console.log(block); //ReferenceError not accessible

// ex 4
function outer() {
  let a = 10; //Outer function variable

  function inner() {
    console.log("Accessing inner function variable :", a);
  }

  inner();
}
outer();
