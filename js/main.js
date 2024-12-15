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


const dReg = document.getElementById("d-reg");
const regLink = document.getElementsByClassName("header__link")

regLink[0].addEventListener('click', () => {
    dReg.showModal();
});

regLink[1].addEventListener('click', () => {
    dReg.showModal();
});

const dLog = document.getElementById("d-log");
const logBtn1 = document.getElementById("login-btn")
const logBtn2 = document.getElementById("side-login-btn")

logBtn1.addEventListener('click', () => {
    dLog.showModal();
});

logBtn2.addEventListener('click', () => {
    dLog.showModal();
});