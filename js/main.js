window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll == 0) {
        document.getElementById("h").classList.remove("h_b");
        document.getElementById("h").classList.add("h_a");
    }
    else {
        document.getElementById("h").classList.remove("h_a");
        document.getElementById("h").classList.add("h_b");
    }
});