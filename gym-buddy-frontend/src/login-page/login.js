const home = document.getElementById("logo");
const button = document.getElementById("button");

function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToHome();

function goToNext() {
    button.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToNext();

function setPointer(){
    home.style.cursor = "pointer";
}

setPointer();