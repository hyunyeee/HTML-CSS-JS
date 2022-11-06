

inputNum = prompt("숫자를 입력하세요");


if(inputNum!==null){

    if(inputNum % 4===0){
        document.write("<p>" + inputNum + "은 4의 배수입니다." + "</p>");

        // document.getElementById("text").innerHTML = inputNum + "은 4의 배수입니다.";

    }
    else{
        document.write("<p>" + inputNum + "은 4의 배수가 아닙니다." + "</p>");

    }
}

// document.getElementById("id 이름").innerHTML = 변경하고 싶은 내용


//document.write p 태그를 container안에 넣고싶음
//container안에 id="text" 인 p 태그에 위 내용으로 대체 하고 싶은데 안 됨

