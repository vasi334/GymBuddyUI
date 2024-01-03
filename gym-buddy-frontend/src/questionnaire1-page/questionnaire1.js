const home = document.getElementById("logo");
const next = document.getElementById("next");

function goToHome(){
    home.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToHome();

function goToNext(){
    next.addEventListener("click", () => {
        window.location.href = "../questionnaire2-page/questionnaire2.html"
    })
};
goToNext();

function setPointer(){
    home.style.cursor = "pointer";
    next.style.cursor = "pointer";
}
setPointer();


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('clicked'));
            this.classList.add('clicked');
        });
    });
});