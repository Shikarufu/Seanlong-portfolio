//declare variable
const getinput = document.getElementById("tempinput");
const getbtn = document.getElementById("btnconvert");
const getanws = document.getElementById("anws");
const getreset = document.getElementById("btnreset");
const tempselect1 = document.getElementById("temp1");
const tempselect2 = document.getElementById("temp2");
const getdisplay = document.getElementById("display");

function time(){
    getanws.classList.remove("animate");
}

function convert(){
    getbtn.disabled=false;
    const  input=getinput.value.trim();
    if(input == "" || isNaN(input)){
        getanws.innerText="Please enter number first";
        getanws.classList.add("animate");
        setTimeout(time,200);
        return;
    }
    
    

    if(tempselect1.value == "celsius" && tempselect2.value == "fahrenheit"){
        const solve=Number((input * 9/5)+32);
        getanws.innerText=solve.toFixed(2)+" °F";
    }
    else if(tempselect1.value == "fahrenheit" && tempselect2.value == "celsius"){
        const solve=Number((input - 32) * 5/9);
        getanws.innerText=solve.toFixed(2)+" °C";
    }else if(tempselect1.value == "celsius" && tempselect2.value == "kelvin"){
        const solve=Number(input)+273.15;
        getanws.innerText=solve.toFixed(2)+" K";
    }
    else if(tempselect1.value == "fahrenheit" && tempselect2.value == "kelvin"){
        const solve=Number((input - 32) * 5/9 + 273.15);
        getanws.innerText=solve.toFixed(2)+" K";
    }
    else if(tempselect1.value == "kelvin" && tempselect2.value == "celsius"){
        const solve=Number(input - 273.15);
        getanws.innerText=solve.toFixed(2)+" °C";
    }
    else if(tempselect1.value == "kelvin" && tempselect2.value == "fahrenheit"){
        const solve=Number((input - 273.15) * 9/5 + 32);
        getanws.innerText=solve.toFixed(2)+" °F"
    }
   
    
}

getbtn.addEventListener("click",convert);

function reset(){
    getanws.innerText="";
    getinput.value="";
    getinput.placeholder="Choose type of temp first";
    getinput.disabled=true;
    getbtn.disabled=false;
    tempselect1.value="";
    tempselect2.value="";
    getdisplay.innerText="";
    
}   
getreset.addEventListener("click",reset);
// function hide(){
//     getanws.innerText="";

// }
// getinput.addEventListener("click",hide);

function choosetemp(){
    if(tempselect1.value == "celsius" && tempselect2.value == "fahrenheit"){
        getdisplay.innerText="Celsius to Fahrenheit";
        getinput.placeholder="Enter celsius";
        getinput.disabled=false;//enable to input
    }
    else if(tempselect1.value == "fahrenheit" && tempselect2.value == "celsius"){
        getdisplay.innerText="Fahrenheit to Celsius";
        getinput.placeholder="Enter fahrenheit";
        getinput.disabled=false;
    }
    else if(tempselect1.value == "kelvin" && tempselect2.value == "celsius"){
        getdisplay.innerText="Kelvin to Celsius";
        getinput.placeholder="Enter kelvin";
        getinput.disabled=false;
    }
    else if(tempselect1.value == "fahrenheit" && tempselect2.value == "kelvin"){
        getdisplay.innerText="Fahrenheit to Kelvin";
        getinput.placeholder="Enter fahrenheit";
        getinput.disabled=false;
    }
    else if(tempselect1.value == "celsius" && tempselect2.value == "kelvin"){
        getdisplay.innerText="Celsius to Kelvin";
        getinput.placeholder="Enter celsius";
        getinput.disabled=false;
    }
    else if(tempselect1.value == "kelvin" && tempselect2.value == "fahrenheit"){
        getdisplay.innerText="Kelvin to Fahrenheit";
        getinput.placeholder="Enter kelvin";
        getinput.disabled=false;
    }
    else if(
        (tempselect1.value == "celsius" && tempselect2.value == "celsius")
        ||
        (tempselect1.value == "fahrenheit" && tempselect2.value == "fahrenheit")
        ||
        (tempselect1.value == "kelvin" && tempselect2.value == "kelvin")
    ){
        getdisplay.innerText="--ERROR--";
        getinput.placeholder="Cannot convert the same temperature";
        getinput.disabled=true;
        //won't be able to click
        getanws.innerText="--No answer--";
        getbtn.disabled=true;
        
    }
}
tempselect1.addEventListener("change",choosetemp);
tempselect2.addEventListener("change",choosetemp);

