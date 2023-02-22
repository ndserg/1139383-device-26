'use strict';
var sliderControls = document.querySelector('.promo-slider-controls');
var sliderButtons = sliderControls.querySelectorAll('button');
var slides = document.querySelectorAll('.promo-slider-item');

var currentSlide = 0;

for (var i = 0;  i < slides.length; i++ ) {
  if (slides[i].classList.contains('promo-slider-item-current')) {
    currentSlide = i;
  }
}

for (var j = 0;  j < sliderButtons.length; j++ ) {
  sliderButtons[j].classList.remove('promo-slider-button-current');
}

sliderButtons[currentSlide].classList.add('promo-slider-button-current')

var sliderControlsHandler = (evt) => {
  if (evt.target.dataset.slide) {
    sliderButtons[currentSlide].classList.remove('promo-slider-button-current');
    slides[currentSlide].classList.remove('promo-slider-item-current');
    slides[currentSlide].classList.add('visually-hidden');

    currentSlide = evt.target.dataset.slide - 1;

    sliderButtons[currentSlide].classList.add('promo-slider-button-current');
    slides[currentSlide].classList.remove('visually-hidden');
    slides[currentSlide].classList.add('promo-slider-item-current');
  }
}

sliderControls.addEventListener('click', sliderControlsHandler);
