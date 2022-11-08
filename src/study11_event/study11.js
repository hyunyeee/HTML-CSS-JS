



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






