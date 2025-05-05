process.on("message", (msg) => {
  console.log("Parent Says :", msg);
  process.send("Hii Back");
});
