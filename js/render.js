/* eslint-disable no-console */
'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupWizard.children[0].children[0];
  var wizardEyes = setupWizard.children[0].children[2];
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var similarLastWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  removeHiddenClass('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < window.setup.WIZARD_PERSONALITY.length; j++) {
    renderWizard(window.setup.WIZARD_PERSONALITY[j]);
  }

  similarListElement.appendChild(fragment);

  function renderWizard(wizard) {
    var shape = similarLastWizardTemplate.cloneNode(true);
    shape.querySelector('.setup-similar-label').textContent = wizard.name;
    shape.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    shape.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    fragment.appendChild(shape);
  }

  function removeHiddenClass(selector) {
    document.querySelector(selector).classList.remove('hidden');
  }
  // смена цвета мага и его атрибутов
  wizardCoat.addEventListener('click', changeCoat);
  wizardEyes.addEventListener('click', changeEyes);
  wizardFireball.addEventListener('click', changeFireball);

  function changeCoat() {
    wizardCoat.style.fill = window.setup.getRandomItem(window.setup.WIZARD_COAT_COLOR);
    setupPlayer.children[0].children[1].value = wizardCoat.style.fill;
  }

  function changeEyes() {
    wizardEyes.style.fill = window.setup.getRandomItem(window.setup.WIZARD_EYES_COLOR);
    setupPlayer.children[0].children[2].value = wizardEyes.style.fill;
  }


  function changeFireball() {
    var newColor = window.setup.getRandomItem(window.setup.WIZARD_FIREBALL_COLOR);
    wizardFireball.style.background = newColor;
    setupPlayer.children[1].children[1].value = newColor;
  }
  console.log(similarListElement);
})();

