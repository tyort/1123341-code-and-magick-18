/* eslint-disable no-console */
'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupWizard.children[0].children[0];
  var wizardEyes = setupWizard.children[0].children[2];
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var similarListElement = window.setup.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  window.backend.load(successHandler, errorHandler);
  // смена цвета мага и его атрибутов
  wizardCoat.addEventListener('click', changeCoat);
  wizardEyes.addEventListener('click', changeEyes);
  wizardFireball.addEventListener('click', changeFireball);

  function changeCoat() {
    wizardCoat.style.fill = window.generate.getRandomItem(window.generate.WIZARD_COAT_COLOR);
    setupPlayer.children[0].children[1].value = wizardCoat.style.fill;
  }

  function changeEyes() {
    wizardEyes.style.fill = window.generate.getRandomItem(window.generate.WIZARD_EYES_COLOR);
    setupPlayer.children[0].children[2].value = wizardEyes.style.fill;
  }

  function changeFireball() {
    var newColor = window.generate.getRandomItem(window.generate.WIZARD_FIREBALL_COLOR);
    wizardFireball.style.background = newColor;
    setupPlayer.children[1].children[1].value = newColor;
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  function successHandler(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    window.setup.setup.querySelector('.setup-similar').classList.remove('hidden');
  }

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }
})();

