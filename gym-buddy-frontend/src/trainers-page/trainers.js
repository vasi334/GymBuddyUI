const home = document.getElementById("home");
const logo = document.getElementById("logo");
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

function goToLogo() {
    logo.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToLogo();

function goToWorkouts() {
    workouts.addEventListener("click", () => {
        window.location.href = "../workouts-page/workouts.html"
    })
};
goToWorkouts();

function goToGyms() {
    gyms.addEventListener("click", () => {
        window.location.href = "../gyms-page/gyms.html"
    })
};
goToGyms();

function goToNutritionists() {
    nutritionists.addEventListener("click", () => {
        window.location.href = "../nutritionists-page/nutritionists.html"
    })
};
goToNutritionists();

function goToTrainers() {
    trainers.addEventListener("click", () => {
        window.location.href = "../trainers-page/trainers.html"
    })
};
goToTrainers();

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

function setPointer(){
    logo.style.cursor = "pointer";
}
setPointer();   