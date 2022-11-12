


/*
let inputvalue = prompt("입력하세요", "디폴트값");

console.log(inputvalue);

alert(inputvalue);

document.write(inputvalue);

*/



function calAge() {
    let Birthyear = parseInt(prompt("출생년도를 입력하세요", "2002"));

    let Age = 2022 - Birthyear + 1;

    document.querySelector('#result_calAge').innerHTML = "올해 " + Age + "세 입니다.";


}