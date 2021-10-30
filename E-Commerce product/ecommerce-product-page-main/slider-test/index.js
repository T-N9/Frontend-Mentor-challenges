const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

console.log(numberOfImages);

function init() {

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");
}

init();

function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++){
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", ()=>{
            goToSlide(i);
        })
    }

    navigationDots.children[0].classList.add("active");
}

createNavigationDots();

prevBtn.addEventListener ("click", () => {

    if(currentSlide <= 0) {
        goToSlide(numberOfImages -1);
        // currentSlide=numberOfImages -1;
        return;
    }

    currentSlide--;
    goToSlide(currentSlide);
});

nextBtn.addEventListener ("click", () => {

    if(currentSlide >= numberOfImages -1) {
        goToSlide(0);
        // currentSlide=0;
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
    slideContainer.style.transform = `translateX(-${slideWidth * slideNumber}px)`;

    currentSlide = slideNumber;

    setActiveClass();
}

function setActiveClass() {
    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add('active');

    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add('active');
}