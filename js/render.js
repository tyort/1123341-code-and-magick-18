/* eslint-disable no-console */
'use strict';

(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['red', 'black', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupPlayer = document.querySelector('.setup-player');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template');

  window.render = {
    rendered: function (data) {
      var takeNumber = data.length > 4 ? 4 : data.length;
      similarList.innerHTML = '';
      for (var i = 0; i < takeNumber; i++) {
        similarList.appendChild(renderWizard(data[i]));
      }
      similar.classList.remove('hidden');
    }
  };

  // прорисовка магов с атрибутами: глаза и плащ
  function renderWizard(wizardAppear) {
    var element = wizardTemplate.content.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizardAppear.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardAppear.colorEyes;
    element.querySelector('.setup-similar-label').innerText = wizardAppear.name;
    return element;
  }

  wizardCoat.addEventListener('click', changeCoat);
  wizardEyes.addEventListener('click', changeEyes);
  wizardFireball.addEventListener('click', changeFireball);

  function changeCoat() {
    wizardCoat.style.fill = getRandomItem(WIZARD_COAT_COLOR);
    setupPlayer.children[0].children[1].value = wizardCoat.style.fill;
    window.onCoatChange(wizardCoat.style.fill);
    console.log(arguments); // показыват то, что возвращает функция debounce
  }

  function changeEyes() {
    wizardEyes.style.fill = getRandomItem(WIZARD_EYES_COLOR);
    setupPlayer.children[0].children[2].value = wizardEyes.style.fill;
    window.onEyesChange(wizardEyes.style.fill);
  }

  function changeFireball() {
    var newColor = getRandomItem(WIZARD_FIREBALL_COLOR);
    wizardFireball.style.background = newColor;
    setupPlayer.children[1].children[1].value = newColor;
  }

  function getRandomItem(array) {
    var index = Math.floor(Math.random() * array.length);
    var randomItem = array[index];
    return randomItem;
  }

})();
