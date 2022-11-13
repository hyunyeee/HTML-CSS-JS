




let slides = document.querySelectorAll("#container > img"); //이미들을 저장한 배열
let prev = document.querySelector("#prev"); //이전 버튼
let next = document.querySelector("#next"); //다음 버튼
let current = 0; //0으로 초기화


showSlides(current);

prev.onclick = prevSlide;
next.onclick = nextSlide;




function showSlides(n) { //이미지 모두 숨기고, 해당 인덱스값 이미지만 보이게
    for (let i = 0; i < slides.length; i++) { //처음부터 끝까지 반복
        slides[i].style.display = "none"; //모든 이미지 숨김
    }
    slides[n].style.display = "block"; //해당 인덱스값 이미지만 보이게
}


function prevSlide() {
    if (current > 0) current -= 1;  //if 첫번째 이미지가 아니면 current -=1; 하고

    else current = slides.length -1; //else 첫번째 이미지라면 마지막 이미지 보여줘야함 current = slides.length -1 ;

    showSlides(current);


}

function nextSlide() {
    if (current < slides.length - 1) current += 1; //if 마지막 이미지가 아니라면 current += 1 함

    else current = 0; //else 마지막 이미지라면 첫번재 이미지 보여줘야함 current = 0;

    showSlides(current);

}