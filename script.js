let offset = 0;
const sliderLine = document.querySelectorAll(".slider__line");

document.querySelector(".btn-next").addEventListener("click", () => {
    offset === 0? offset = -1600:offset += 400;
    sliderLine.forEach((item) => item.style.left = offset + "px");
})

document.querySelector(".slider__item-last").addEventListener("click", () => {
    offset < -1200? offset = 0:offset -= 400;
    sliderLine.forEach((item) => item.style.left = offset + "px");
})