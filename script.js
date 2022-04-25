let offset = 0;
const sliderLine = document.querySelectorAll(".slider__line");

document.querySelector(".btn-next").addEventListener("click", () => {
    offset < -768? offset = 0:offset -= 256;
    sliderLine.forEach((item) => item.style.left = offset + "px");
})