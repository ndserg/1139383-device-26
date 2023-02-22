'use strict';
var servicesControls = document.querySelector('.services-list');
var servicesButtons = servicesControls.querySelectorAll('button');
var services = document.querySelectorAll('.services-description');

var currentService = 0;

for (var i = 0;  i < services.length; i++ ) {
  if (!services[i].classList.contains('visually-hidden')) {
    currentService = i;
  }
}

for (var j = 0;  j < servicesButtons.length; j++ ) {
  servicesButtons[j].classList.remove('services-list-current');
}

servicesButtons[currentService].classList.add('services-list-current');

var servicesControlsHandler = (evt) => {
  if (evt.target.dataset.service) {
    servicesButtons[currentService].classList.remove('services-list-current');
    services[currentService].classList.add('visually-hidden');

    currentService = evt.target.dataset.service - 1;

    servicesButtons[currentService].classList.add('services-list-current');
    services[currentService].classList.remove('visually-hidden');
  }
}

servicesControls.addEventListener('click', servicesControlsHandler);
