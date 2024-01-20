var checkbox = document.querySelector("#checkbox");
var body = document.querySelector("body");
var num1 = document.querySelector("#num1");
var oper = document.querySelector("#oper");
var num2 = document.querySelector("#num2");
var res = document.querySelector("#answar");
var btn = document.querySelector("#btn");
var acbtn = document.querySelector("#ac-btn");

var modeD = false;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add("dark");
    res.classList.add("dark");
    num1.classList.add("dark");
    oper.classList.add("dark");
    num2.classList.add("dark");
    btn.classList.add("dark");
    acbtn.classList.add("dark");

    body.classList.remove("light");
    res.classList.remove("light");
    num1.classList.remove("light");
    oper.classList.remove("light");
    num2.classList.remove("light");
    btn.classList.remove("light");
    acbtn.classList.remove("light");
  } else {
    body.classList.add("light");
    res.classList.add("light");
    num1.classList.add("light");
    oper.classList.add("light");
    num2.classList.add("light");
    btn.classList.add("light");
    acbtn.classList.add("light");

    body.classList.remove("dark");
    res.classList.remove("dark");
    num1.classList.remove("dark");
    oper.classList.remove("dark");
    num2.classList.remove("dark");
    btn.classList.remove("dark");
    acbtn.classList.remove("dark");
  }
});