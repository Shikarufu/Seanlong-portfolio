// const birthday=document.getElementById("birthday");

// console.log(birthday.value);

// const select=new Date(birthday.value);
// console.log(select.toDateString());

// // console.log("result after choosee");
// // console.log(select.value);


const birthday = document.getElementById("birthday");
const cal = document.getElementById("cal");
const result = document.getElementById("result");
let msg;
msg=document.getElementById("msg");
const reset=document.getElementById("reset");

// birthday.addEventListener("change", () => {

//   const select = new Date(birthday.value);
// //   console.log("Date object:", select);
// //   console.log(select.toDateString());
// });


cal.addEventListener("click", () => {
    if (!birthday.value) {
        result.innerText = "Please fill your birth of date first!!";
        return;
    }
    const select = new Date(birthday.value);

    const day = select.getDate();
    const month = select.getMonth() + 1;
    const year = select.getFullYear();

    // const answer=2026-year;
    // result.innerText="You are"+answer+" years old";
    let age;
    age = 2026 - year;


    if (age >= 18) {
        result.innerText = "You are " + age + " years old!!";
        msg.innerText="You can vote";
    }
    else{
        result.innerText = "You are " + age + " years old!!";
        msg.innerText="You can't vote";
    }
});


reset.addEventListener("click",()=>{
    result.innerText="";
    msg.innerText="";
    birthday.value="";
});