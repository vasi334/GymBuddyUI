const home = document.getElementById("logo");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

function goToHome(){
    home.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToHome();

function goToPrevious(){
    previous.addEventListener("click", () => {
        window.location.href = "../questionnaire1-page/questionnaire1.html"
    })
};
goToPrevious();

function goToNext(){
    next.addEventListener("click", () => {
        window.location.href = "../my-account-page/my-account.html"
    })
};
goToNext();

function setPointer(){
    home.style.cursor = "pointer";
    previous.style.cursor = "pointer";
    next.style.cursor = "pointer";
}
setPointer();


document.addEventListener('DOMContentLoaded', function () {
    const splitButtons = document.querySelectorAll('.split-button button');
    const imageButton = document.querySelector('.image-button');

    // Add click event listener to split buttons
    splitButtons.forEach(splitButton => {
        splitButton.addEventListener('click', function () {
            splitButtons.forEach(btn => btn.classList.remove('clicked'));
            this.classList.add('clicked');
        });
    });

    // Add click event listener to image button
    imageButton.addEventListener('click', function () {
        imageButton.classList.add('clicked');
    });
});