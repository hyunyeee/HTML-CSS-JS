let pics = document.getElementsByClassName("pic"); //pic인 요소를 모두 가져옴
let lightbox = document.getElementById("lightBox"); //라이트 박스 요소를 가져옴
let lightboxImage = document.getElementById("lightboxImage"); //라이트박스 이미지를 가져옴


/*pics 배열의 i번째 요소를 클릭할 경우 showLightbox 함수 실행*/
for(i = 0; i<pics.length; i++){
    pics[i].addEventListener("click", showLightbox);
}







/*클릭한 이미지의 큰 이미지 파일 경로를 가져와서 라이트 박스에 있는 이미지 파일 경로 변경*/
function showLightbox() {
    let bigLocation = this.getAttribute("src"); //섬네일 이미지 속성값 가져옴
    lightboxImage.setAttribute("src", bigLocation);
    lightbox.style.display = "block";
}
