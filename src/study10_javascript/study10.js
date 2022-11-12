




function calSumStart() {

    let Num = prompt("n을 입력하세요");

    if(Num !== null) {
        calSum(parseInt(Num)); //prompt로 받으면 문자열 이므로 정수로 변환
    }

}


function calSum(n) {

    let sum = 0;
    for (let i =1; i < n+1; i++) {
        sum += i;
    }




    document.querySelector('#result_calSum').innerHTML = "1부터 " + n + "까지 더하면 " + sum;



}



