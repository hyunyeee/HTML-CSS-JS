//색깔 배열
let colorArr = ["#ff8f8f", "lightsalmon", "#ffefa0", "#a1e7a1", "#7DC9FFFF", "#596bee", "#A788FFFF"];

let boxesList = document.querySelectorAll(".box"); //.box 배열 형태로 저장

for (let i = 0; i<boxesList.length; i++) { //boxesList 길이만큼
    boxesList[i].style.backgroundColor = colorArr[i]; //해당 인덱스에 해당하는 값 배경색 변경

    boxesList[i].addEventListener("click", function () { //클릭이벤트 발생하면

        let bodyTag = document.getElementById("body"); //컨테이너 접근
        bodyTag.style.backgroundColor = colorArr[i]; //배경 색 바꾸기
    });

}
