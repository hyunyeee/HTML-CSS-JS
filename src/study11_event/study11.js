



function showTextBox() {
    //텍스트 박스 표시하고 설명 보기 버튼 안보이게 닫기 버튼 보이게
    document.querySelector('#openTextBox').style.display = "block";
    document.querySelector('#openbutton').style.display = "none";
}


//방법 2 HTML 태그에 자바스크립트 소스를 섞지 않음

/*
document.querySelector('#open').onclick = function () {
    //텍스트 박스 표시하고 설명 보기 버튼 안보이게 닫기 버튼 보이게
    document.querySelector('#openTextBox').style.display = "block";
    document.querySelector('#buttonOn').style.display = "none";
}
*/


function closeTextBox() {
    //텍스트 박스 숨기고 설명보기 버튼 보이게
    document.querySelector('#openTextBox').style.display = "none";
    document.querySelector('#openbutton').style.display = "block";

}

window.open("../study08_transition/study08.html", "수호천사들", "width: 300 height auto");


/*
팝업창 window.open() 이외에도
<div>태그를 사용해 레이어 방식을 이용해서 기존 사이트 위에 팝업창 겹칠 수 있음
자바스크립트 Document객체를 사용해 만들 수 있음
*/

//수호천사들 버튼 누르면 fairylink 함수 실행 해서 팝업 띄우게 하기 -> 미해결

/*
function fairyslink() {

    document.querySelector('#fairys').window.open("../study08_transition/study08.html", "수호천사들", "width: 300 height auto");

}

*/



