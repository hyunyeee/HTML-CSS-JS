





function calWeight() {

    let height = parseInt(prompt("키 입력", "180(cm)"));

    let weight = parseInt(prompt("몸무게 입력", "74(kg)"));

    let nomal = (height - 100) * 0.9;


    let over = weight - nomal;

    let less = nomal - weight;


    if (weight > nomal)
        document.querySelector("#result_calweight").innerHTML = "결과: 적정 체중은 " + nomal + "이며, 현재 적정 체중에서 " + over + "kg 초과입니다.";

    else if (weight < nomal)
        document.querySelector("#result_calweight").innerHTML = "결과: 적정 체중은 " + nomal + "이며, 현재 적정 체중에서 " + less + "kg 미달입니다.";


    else
        document.querySelector("#result_calweight").innerHTML = "표준 체중입니다.";


}
