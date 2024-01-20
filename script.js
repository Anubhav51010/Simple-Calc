var num1 = document.querySelector("#num1");
var oper = document.querySelector("#oper");
var num2 = document.querySelector("#num2");

var res = document.querySelector("#answar");

var btn = document.querySelector("#btn");
var acbtn = document.querySelector("#ac-btn");

btn.addEventListener("click", () => {
    if (oper.value === '+') {
        res.value = parseFloat(num1.value) + parseFloat(num2.value);
    }
    else if (oper.value === '-') {
        res.value = parseFloat(num1.value) - parseFloat(num2.value);
    }
    else if (oper.value === '*') {
        res.value = parseFloat(num1.value) * parseFloat(num2.value);
    }
    else if (oper.value === '/') {
        res.value = parseFloat(num1.value) / parseFloat(num2.value);
    }
    else if (oper.value === '%') {
        res.value = parseFloat(num1.value) % parseFloat(num2.value);
    }else {
        res.value = "This Is Not A Operator !";
    }
});
acbtn.addEventListener("click", () => {
    res.value = "";
});
