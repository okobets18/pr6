var changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

changeBackgroundBtn.addEventListener("click", function() {
  var body = document.querySelector("body");
  body.style.backgroundColor = "blue"; 
});

var changeBackgroundBtn1 = document.getElementById("changeBackgroundBtn1");

changeBackgroundBtn1.addEventListener("click", function() {
  var body = document.querySelector("body");
  console.log('blue');
  body.style.backgroundColor = "rgb(0, 213, 255)"; 
});

var changeBackgroundBtn2 = document.getElementById("changeBackgroundBtn2");

changeBackgroundBtn2.addEventListener("click", function() {
  var body = document.querySelector("body");
  body.style.backgroundColor = "red"; 
});