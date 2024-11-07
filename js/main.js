window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll == 0) {
        document.getElementById("h").classList.remove("header_b");
        document.getElementById("h").classList.add("header_a");
    }
    else {
        document.getElementById("h").classList.remove("header_a");
        document.getElementById("h").classList.add("header_b");
    }
});
let b = true;
function side() {
    if (b) {
        document.getElementById("side").style.display = "flex";
        b = !b;
    }
    else {
        document.getElementById("side").style.display = "none";
        b = !b;
    }
}
