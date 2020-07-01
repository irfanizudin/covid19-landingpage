

let btn = document.getElementsByClassName("nav-item");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}