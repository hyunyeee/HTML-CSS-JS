



function newResister() {
    /*요소 노드 추가하기*/

    document.querySelector('#itemList').style.display = "block";

    let newItem = document.createElement('li'); //요소 노드 추가

    let item = document.querySelector('#item'); //폼의 텍스트 필드

    let newText = document.createTextNode(item.value); //텍스트 필드의 값을 텍스트 노드로 만들기

    newItem.appendChild(newText); //텍스트 노드를 요소 노드의 자식 노드로 추가

    let itemList = document.querySelector("#itemList"); //웹 문서에서 부모 노드 가져오기

    /*
    itemList.appendChild(newItem); //새로 만든 요소 노드를 부모 노드에 추가

    appendChild() 메소드는 새로운 노드를 부모 노드의 맨 끝에 추가
    : 마지막에 입력한 값은 목록 맨 아래에 표시

    마지막 자식 노드를 맨 앞의 자식 노드 앞에 추가하면
    마지막에 입력한 값을 맨 위에 나타낼 수 있음
    */

    itemList.insertBefore(newItem, itemList.childNodes[0]);

    item.value = "";


    /*클릭하면 노드 삭제하기*/
    let items = document.querySelectorAll("li"); //모든 항목 가져오기

    for (let i=0; i<items.length; i++) {
        items[i].addEventListener("click", function () { //i번째 요소 클릭했을 때 함수 실행
            if(this.parentNode)
                this.parentNode.removeChild(this);

            if(items.length===0){
                document.querySelector('#itemList').style.display = "none";
            }


        })
    }



    /*

    만약에 ul에 itemList가 비어있으면
    *
    * display none
    *
    * */



}














