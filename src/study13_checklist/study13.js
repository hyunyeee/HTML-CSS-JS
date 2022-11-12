



let checks = document.querySelectorAll(".check");


for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener("click", function() {

        console.log(checks)

        this.style.color = "#ccc";
        this.parentNode.style.color = "#ccc";
        this.parentNode.style.textDecoration="line-through";
    });
}


