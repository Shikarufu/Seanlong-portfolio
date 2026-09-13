const convert=document.getElementById("convert");
const reset=document.getElementById("reset");
const temp1=document.getElementById("temp1");
const temp2=document.getElementById("temp2");
const clarify=document.getElementById("clarify");
const result=document.getElementById("result");
const msg=document.getElementById("msg");
const input=document.getElementById("input");

input.disabled=true;

function check(){
    if(temp1.value && temp2.value){
        input.disabled=false;
    }
    else{
        input.disabled=true;
    }
}
temp1.addEventListener("change",check);
temp2.addEventListener("change",check);

function funConvert(){
    
    const Input = input.value.trim();
    if (Input == "" || isNaN(Input)) {
        msg.innerText = "Please select option first! before you input and click the button";

        return;
    }
    //all number from this website www.xe.com
    //cambodia to all
    if(temp1.value =="cambodia" && temp2.value == "japan"){
        const solve=Number(input.value *0.0396);
        const num=input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "cambodia" && temp2.value=="china"){
        const solve=Number(input.value *0.0017);
        const num=input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "cambodia" && temp2.value=="uk"){
        const solve=Number(input.value * 0.00019);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "cambodia" && temp2.value == "south korea"){
        const solve=Number(input.value * 0.3697);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "cambodia" && temp2.value == "singapore"){
        const solve=Number(input.value * 0.00032);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "cambodia" && temp2.value == "mexico"){
        const solve=Number(input.value * 0.0044);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "cambodia" && temp2.value == "philippines"){
        const solve=Number(input.value * 0.0149);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "cambodia" && temp2.value == "russia"){
        const solve=Number(input.value * 0.0196);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "cambodia" && temp2.value == "usa"){
        const solve=Number(input.value / 4000);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "cambodia" && temp2.value == "indonesia"){
        const solve=Number(input.value * 4.2503);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //japan to all
    if(temp1.value == "japan" && temp2.value == "cambodia"){
        const solve=Number((input.value * 25.18811969));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "japan" && temp2.value == "china"){
        const solve=Number((input.value * 0.04301244));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "japan" && temp2.value == "uk"){
        const solve=Number((input.value * 0.00469189));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "japan" && temp2.value == "south korea"){
        const solve=Number((input.value * 9.30506133));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "japan" && temp2.value == "singapore"){
        const solve=Number((input.value * 0.00802149));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "japan" && temp2.value == "mexico"){
        const solve=Number((input.value * 0.10970645));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "japan" && temp2.value == "philippines"){
        const solve=Number((input.value * 0.37611254));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "japan" && temp2.value == "russia"){
        const solve=Number((input.value * 0.48939895));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "japan" && temp2.value == "usa"){
        const solve=Number((input.value * 0.00629018));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "japan" && temp2.value == "indonesia"){
        const solve=Number((input.value * 107.47908401));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yens"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //china to all
    if(temp1.value == "china" && temp2.value == "cambodia"){
        const solve=Number((input.value * 585.91012348));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "china" && temp2.value == "japan"){
        const solve=Number((input.value * 23.24761941 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "china" && temp2.value == "uk"){
        const solve=Number((input.value * 0.10905345));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "china" && temp2.value == "south korea"){
        const solve=Number((input.value * 216.42842239));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "china" && temp2.value == "singapore"){
        const solve=Number((input.value * 0.18643947));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "china" && temp2.value == "mexico"){
        const solve=Number((input.value * 2.55013484));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "china" && temp2.value == "philippines"){
        const solve=Number((input.value * 8.74074673));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "china" && temp2.value == "russia"){
        const solve=Number((input.value * 11.38855033));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "china" && temp2.value == "usa"){
        const solve=Number((input.value * 0.14630630));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "china" && temp2.value == "indonesia"){
        const solve=Number((input.value * 2,499.1299));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Yuans"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //uk to all
    if(temp1.value == "uk" && temp2.value == "cambodia"){
        const solve=Number((input.value * 5,370.0987));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "uk" && temp2.value == "japan"){
        const solve=Number((input.value * 213.19829290 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "uk" && temp2.value == "china"){
        const solve=Number((input.value * 9.16886112));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "uk" && temp2.value == "south korea"){
        const solve=Number((input.value * 1,985.6955));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "uk" && temp2.value == "singapore"){
        const solve=Number((input.value * 1.70931469));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "uk" && temp2.value == "mexico"){
        const solve=Number((input.value * 23.39074755));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "uk" && temp2.value == "philippines"){
        const solve=Number((input.value * 80.13573507));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "uk" && temp2.value == "russia"){
        const solve=Number((input.value * 104.54034065));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "uk" && temp2.value == "usa"){
        const solve=Number(input.value * 1.34134873);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "uk" && temp2.value == "indonesia"){
        const solve=Number((input.value * 22,907.23));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //south korea to all
    if(temp1.value == "south korea" && temp2.value == "cambodia"){
        const solve=Number((input.value * 2.70370838));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "south korea" && temp2.value == "japan"){
        const solve=Number((input.value * 0.10737444 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "south korea" && temp2.value == "china"){
        const solve=Number((input.value * 0.00461852));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pounds"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "south korea" && temp2.value == "uk"){
        const solve=Number((input.value * 0.00050367));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "south korea" && temp2.value == "singapore"){
        const solve=Number((input.value * 0.00086095));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "south korea" && temp2.value == "mexico"){
        const solve=Number((input.value * 0.01178319));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "south korea" && temp2.value == "philippines"){
        const solve=Number((input.value * 0.04037450));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "south korea" && temp2.value == "russia"){
        const solve=Number((input.value * 0.05265696));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "south korea" && temp2.value == "usa"){
        const solve=Number(input.value * 0.00067531);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "south korea" && temp2.value == "indonesia"){
        const solve=Number((input.value * 11.54212239));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }
    
    //singapore to all
    if(temp1.value == "singapore" && temp2.value == "cambodia"){
        const solve=Number((input.value * 3,140.3128));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "singapore" && temp2.value == "japan"){
        const solve=Number((input.value * 124.69534036 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "singapore" && temp2.value == "china"){
        const solve=Number((input.value * 5.36483180));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "singapore" && temp2.value == "uk"){
        const solve=Number((input.value * 0.58498735));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "singapore" && temp2.value == "south korea"){
        const solve=Number((input.value * 0.00086095));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "singapore" && temp2.value == "mexico"){
        const solve=Number((input.value * 13.68031547));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "singapore" && temp2.value == "philippines"){
        const solve=Number((input.value * 46.96062120));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "singapore" && temp2.value == "russia"){
        const solve=Number((input.value * 61.21263114));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "singapore" && temp2.value == "usa"){
        const solve=Number(input.value * 0.78449771);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "singapore" && temp2.value == "indonesia"){
        const solve=Number((input.value * 13,413.48));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //mexico to all
    if(temp1.value == "mexico" && temp2.value == "cambodia"){
        const solve=Number((input.value * 229.19521776));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "mexico" && temp2.value == "japan"){
        const solve=Number((input.value * 9.11394923));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "mexico" && temp2.value == "china"){
        const solve=Number((input.value * 0.39213945));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "mexico" && temp2.value == "uk"){
        const solve=Number((input.value * 0.04271656));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "mexico" && temp2.value == "south korea"){
        const solve=Number((input.value * 84.89503825));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "mexico" && temp2.value == "singapore"){
        const solve=Number((input.value * 0.07307771));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "mexico" && temp2.value == "philippines"){
        const solve=Number((input.value * 3.42858063));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "mexico" && temp2.value == "russia"){
        const solve=Number((input.value * 4.47278660));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "mexico" && temp2.value == "usa"){
        const solve=Number(input.value * 0.05735299 );
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "mexico" && temp2.value == "indonesia"){
        const solve=Number((input.value * 980.53229151));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //philippines to all
    if(temp1.value == "philippines" && temp2.value == "cambodia"){
        const solve=Number((input.value * 66.80008565));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "philippines" && temp2.value == "japan"){
        const solve=Number((input.value * 2.65790949 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "philippines" && temp2.value == "china"){
        const solve=Number((input.value * 0.11429560));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "philippines" && temp2.value == "uk"){
        const solve=Number((input.value * 0.01245212));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "philippines" && temp2.value == "south korea"){
        const solve=Number((input.value * 24.73468606));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "philippines" && temp2.value == "mexico"){
        const solve=Number((input.value * 0.29128244));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "philippines" && temp2.value == "singapore"){
        const solve=Number((input.value * 0.02129196));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "philippines" && temp2.value == "russia"){
        const solve=Number((input.value * 1.30200281 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "philippines" && temp2.value == "usa"){
        const solve=Number(input.value * 0.01669144 );
        const num = input.value;
        clarify.innerText="Your input: "+num+" Pesos"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "philippines" && temp2.value == "indonesia"){
        const solve=Number((input.value * 285.57076941));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Wons"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //russia to all
    if(temp1.value == "russia" && temp2.value == "cambodia"){
        const solve=Number((input.value * 51.28993905));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "russia" && temp2.value == "japan"){
        const solve=Number((input.value * 2.03878629 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "russia" && temp2.value == "china"){
        const solve=Number((input.value *  0.08763297));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "russia" && temp2.value == "uk"){
        const solve=Number((input.value *  0.00955806 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "russia" && temp2.value == "south korea"){
        const solve=Number((input.value * 19.00767834));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "russia" && temp2.value == "mexico"){
        const solve=Number((input.value * 0.22377441));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "russia" && temp2.value == "philippines"){
        const solve=Number((input.value * 0.76825394));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "russia" && temp2.value == "singapore"){
        const solve=Number((input.value * 0.01638587));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "russia" && temp2.value == "usa"){
        const solve=Number(input.value * 0.01288194);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "singapore" && temp2.value == "indonesia"){
        const solve=Number((input.value * 219.76976045));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rubles"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

    //indonesia to all
    if(temp1.value == "indonesia" && temp2.value == "cambodia"){
        const solve=Number((input.value * 0.23473876));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "indonesia" && temp2.value == "japan"){
        const solve=Number((input.value * 0.00930623 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "indonesia" && temp2.value == "china"){
        const solve=Number((input.value * 0.00040048));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "indonesia" && temp2.value == "uk"){
        const solve=Number((input.value * 0.00004358));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "indonesia" && temp2.value == "south korea"){
        const solve=Number((input.value * 0.08627592));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "indonesia" && temp2.value == "mexico"){
        const solve=Number((input.value * 0.00101644));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "indonesia" && temp2.value == "philippines"){
        const solve=Number((input.value * 0.00349620));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "indonesia" && temp2.value == "russia"){
        const solve=Number((input.value * 0.00455041));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "indonesia" && temp2.value == "usa"){
        const solve=Number(input.value * 0.00005862);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "indonesia" && temp2.value == "singapore"){
        const solve=Number((input.value * 0.00007456));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Rupiahs"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }

    //usa to all
     if(temp1.value == "usa" && temp2.value == "cambodia"){
        const solve=Number((input.value * 4001.3885));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Riels";
    }
    else if(temp1.value == "usa" && temp2.value == "japan"){
        const solve=Number((input.value * 158.69919794 ));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "usa" && temp2.value == "china"){
        const solve=Number((input.value * 6.83204375));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "usa" && temp2.value == "uk"){
        const solve=Number((input.value * 0.74341049));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "usa" && temp2.value == "south korea"){
        const solve=Number((input.value * 1,471.5318));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "usa" && temp2.value == "mexico"){
        const solve=Number((input.value * 17.34330741));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "usa" && temp2.value == "philippines"){
        const solve=Number((input.value * 59.58201908));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "usa" && temp2.value == "russia"){
        const solve=Number((input.value * 77.62541373));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "usa" && temp2.value == "indonesia"){
        const solve=Number(input.value * 17061.74);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }
    else if(temp1.value == "usa" && temp2.value == "singapore"){
        const solve=Number((input.value * 1.27176761));
        const num = input.value;
        clarify.innerText="Your input: "+num+" Dollars"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
   

}
convert.addEventListener("click",funConvert);

function funReset(){
    temp1.value="";
    temp2.value="";
    msg.innerText="";
    result.innerText="";
    clarify.innerText="";
    input.value="";
    temp1.selectedIndex=0;
    temp2.selectedIndex=0;
    input.disabled=true;

}
reset.addEventListener("click",funReset);


function checkSelection(){
    if(temp1.value == "cambodia" && temp2.value == "cambodia"
        ||
        temp1.value == "japan" && temp2.value == "japan"
        ||
        temp1.vaue == "china" && temp2.value == "china"
        ||
        temp1.value == "uk" && temp2.value == "uk"
        ||
        temp1.value == "south korea" && temp2.value == "south korea"
        ||
        temp1.value == "singapore" && temp2.value == "singapore"
        ||
        temp1.value == "mexico" && temp2.value == "mexico"
        ||
        temp1.value == "philippines" && temp2.value == "philippines"
        ||
        temp1.value == "russia" && temp2.value == "russia"
        ||
        temp1.value == "indonesia" && temp2.value == "indonesia"
        ||
        temp1.value == "usa" && temp2.value == "usa"
        


    ){
        msg.innerText="Sorry! We can't solve it for you.";
        input.placeholder="Can't input the value";
        input.disabled=true;
        convert.disabled=true;
        reset.disabled=true;
        clarify.innerText="No Answer";
        result.innerText="No Answer";
    }
    else{
        input.disabled=false;
        convert.disabled=false;
        reset.disabled=false;
         msg.innerText="";
         input.placeholder="Enter amount of money";
        clarify.innerText="";
        result.innerText="";
    }
}
temp1.addEventListener("change",checkSelection);
temp2.addEventListener("change",checkSelection);