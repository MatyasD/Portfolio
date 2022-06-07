const nameSticky = document.querySelector('#name');
const nameDiv = document.querySelector("#name-div")
const nav = document.querySelector("ul");
const intro = document.querySelector(".intro");
const introTrigger = document.querySelector(".intro-trigger");
const sticked = document.getElementsByClassName('#name.my-class');
const aboutTrigger = document.querySelector(".about-trigger");
const about = document.querySelector(".about");
const hobbyTrigger = document.querySelector(".hobby-trigger");
const hobbies = document.querySelector(".hobbies")
const projectsTitle = document.querySelector(".project-title-div")
const projects = document.querySelector(".projects")
const projectsTrigger = document.querySelector(".project-trigger");
const opacityValue = "15%"
var root = document.querySelector(':root');


const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('my-class', e.intersectionRatio < 1),

    { threshold: [1] }
);

observer.observe(nameSticky)

let hasHit = [false, false, false, false, false]


window.addEventListener("scroll", event => {

    const domRect1 = nav.getBoundingClientRect();
    const domRect2 = introTrigger.getBoundingClientRect();
    const domRect3 = aboutTrigger.getBoundingClientRect();
    const domRect4 = hobbyTrigger.getBoundingClientRect();
    const domRect5 = projectsTrigger.getBoundingClientRect();



    if (domRect1.bottom > domRect2.top) {
        intro.style.opacity = opacityValue;
        hasHit[0] = true;

    } else if (hasHit[0] && !nameSticky.classList.contains("my-class")) {
        intro.style.opacity = 0;
    }
    else if (hasHit[0]) {
        intro.style.opacity = "100%"
    }

    if (domRect1.bottom > domRect3.top) {
        about.style.opacity = opacityValue;
        hasHit[1] = true;
    } else if (hasHit[1]) {
        about.style.opacity = "100%";
    } else { }

    if (domRect1.bottom > domRect4.top) {
        hobbies.style.opacity = opacityValue;
        hasHit[2] = true
    } else if (hasHit[2]) {
        hobbies.style.opacity = "100%";
        projectsTitle.style.opacity = "100%";
    } else { }

    if (domRect1.bottom > domRect5.top) {
        projects.style.opacity = opacityValue;
        projectsTitle.style.opacity = opacityValue;
        hasHit[3] = true
    } else if (hasHit[3]) {
        projects.style.opacity = "100%";
        projectsTitle.style.opacity = "100%";
    } else { }


    var windowWidth = window.innerWidth;
    if (windowWidth > 858) {
        startAnimations();
    } else { }


});





function startAnimations() {

    if (nameSticky.classList.contains("my-class")) {
        nav.classList.add("load-ani");
        intro.classList.add("load-ani");
        about.classList.add("load-ani");
    } else {
        nav.classList.remove("load-ani");
        intro.classList.remove("load-ani");
        about.classList.remove("load-ani");

    }
}

const lightMode = document.querySelector(".light-mode")
const lightModeMobile = document.querySelector(".light-mode-mobile")

function changeColorMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};








