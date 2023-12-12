const home = document.getElementById("logo");

function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToHome();

function setPointer(){
    home.style.cursor = "pointer";
}

setPointer();