let colorArr = ["lightpink", "lightsalmon", "lemonchiffon", "lightgreen", "lightblue", "lightpurple"]


let i = 0;
function changeColor() {
    i++;
    if (i===colorArr.length) i=0;

    let bodyTag = document.getElementById('bodytagId');

    bodyTag.style.backgroundColor = colorArr[i];
}






