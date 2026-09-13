const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const temp1 = document.getElementById("temp1");
const temp2 = document.getElementById("temp2");
const input = document.getElementById("input");
const warn = document.getElementById("warn");
// const solve=0;


function funReset() {
    temp1.value = "";
    temp2.value = "";
    temp1.selectedIndex = 0;
    temp2.selectedIndex = 0;
    result.innerText = "";
    input.placeholder = "Choose type of weight first";
    input.disabled = true;
    input.value = "";
    warn.innerText="Message";
    warn.classList.remove("error","success");
}
reset.addEventListener("click", funReset);

input.disabled = true;
input.placeholder = "Choose type of weight first";

function funConvert() {
    convert.disabled = false;
    const Input = input.value.trim();
    if (Input == "" || isNaN(Input)) {
        warn.innerText = "Please select option first!";
        warn.classList.add("error");
        return;
    }


    if (temp1.value == "Lbs" && temp2.value == "Kg") {
        const solve = Number(input.value * 0.45359);
        result.innerText = solve.toFixed(3) + " Kg";
    }
    else if (temp1.value == "Kg" && temp2.value == "Lbs") {
        const solve = Number(input.value * 2.20462);
        result.innerText = solve.toFixed(3) + " Lbs";
    }
}
convert.addEventListener("click", funConvert);

function funTemp() {
    if (temp1.value == "Lbs" && temp2.value == "Kg") {
        input.placeholder = "Enter your weight in (Lbs)";
        input.disabled = false;
        warn.innerText="Proccessing....";
        warn.classList.add("success");
    }
    else if (temp1.value == "Kg" && temp2.value == "Lbs") {
        input.placeholder = "Enter your weight in (Kg)";
        input.disabled = false;
        warn.innerText="Proccessing....";
        warn.classList.add("success");
    }
    else if(temp1.value == "Kg" && temp2.value == "Lbs"
        ||
        temp1.value == "Lbs" && temp2.value == "Lbs"
    ){
        input.placeholder="Can't Process!!";
        input.style.color="red";
        warn.innerText="Sorry! We can't solve for you!";
        warn.classList.add("error");
    }
}
temp1.addEventListener("change", funTemp);
temp2.addEventListener("change", funTemp);