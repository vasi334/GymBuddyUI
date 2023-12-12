const home = document.getElementById("home");
const workouts = document.getElementById("workouts");
const gyms = document.getElementById("gyms");
const trainers = document.getElementById("trainers");
const nutritionists = document.getElementById("nutritionists");
const signup = document.getElementById("signup-button");
const login = document.getElementById("login-button");


function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToHome();

function goToLogin() {
    login.addEventListener("click", () => {
        window.location.href = "../login-page/login.html"
    })
};
goToLogin();

function goToSignup() {
    signup.addEventListener("click", () => {
        window.location.href = "../signup-page/signup.html"
    })
};
goToSignup();