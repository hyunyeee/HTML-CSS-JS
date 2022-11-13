let itemList = []; //빈 배열 생성

/*버튼 클릭 되면 addList 함수 실행*/

let addBtn = document.querySelector('#add')
addBtn.addEventListener("click", addList)

function addList() {


    let item = document.querySelector('#item').value //텍스트 필드 내용 가져와서

    if (item !== "") { //공백이 아니면

        itemList.push(item); //itemList배열 끝에 item 추가하고
        document.querySelector('#item').value = ""; //텍스트필드 value 삭제
        document.querySelector('#item').focus(); //텍스트필드에 focus 적용
    }
    showList(); //보여주기
}

function showList() { //보여주기

    let list = "<ul>"; //ul태그 시작

    for (let i = 0; i < itemList.length; i++) { //배열 요소마다 반복

        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>" //요소 + 삭제버튼 <li>로 묶음

    }

    list += "</ul>"; //ul태그 끝

    document.querySelector('#itemList').innerHTML = list; //list 내용 보여주기


    /*X 눌러서 삭제하기*/
    let remove = document.querySelectorAll(".close"); //삭제 버튼을 변수로 저장, 배열 형태가 됨

    for (let i = 0; i < remove.length; i++) { //remove 배열 모든 요소 확인
        remove[i].addEventListener('click', removeList) //요소 클릭하면 removeList함수 실행
    }
}

    function removeList() {
        let id = this.getAttribute("id"); //클릭한 요소의 id 가져오기
        itemList.splice(id, 1); //인덱스값이 id인 요소 1개 삭제
        showList(); //다시 리스트 보여주기

    }



