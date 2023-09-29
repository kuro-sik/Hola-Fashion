const openPopupButton = document.getElementById("openPopup");
const messagePopup = document.getElementById("messagePopup");
const closePopupButton = document.getElementById("closePopup");

openPopupButton.addEventListener("click", () => {
    messagePopup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
    messagePopup.style.display = "none";
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Показать первый слайд при загрузке страницы
showSlide(currentIndex);