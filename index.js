const slides = document.querySelectorAll(".slide");
const bgSlides = document.querySelectorAll(".background");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (s) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${(index - s) * 100}%)`;
  });

  bgSlides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${(index - s) * 100}%)`;
  });
};

goToSlide(0);

//? Next Slide

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);

//? Previous slide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

btnLeft.addEventListener("click", prevSlide);
