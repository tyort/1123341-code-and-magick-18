'use strict';

removeHiddenClass('.setup');
removeHiddenClass('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarLastWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var WIZARD_PERSONALITY = [];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['red', 'black', 'blue', 'yellow', 'green'];

for (var i = 0; i < 4; i++) {
  WIZARD_PERSONALITY.push(generateWizard());
}

function generateWizard() {
  return {
    name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
    coatColor: getRandomItem(WIZARD_COAT_COLOR),
    eyesColor: getRandomItem(WIZARD_EYES_COLOR),
  };
}

for (var j = 0; j < WIZARD_PERSONALITY.length; j++) {
  renderWizard(WIZARD_PERSONALITY[j]);
}

function renderWizard(wizard) {
  var shape = similarLastWizardTemplate.cloneNode(true);
  shape.querySelector('.setup-similar-label').textContent = wizard.name;
  shape.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  shape.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  fragment.appendChild(shape);
}
similarListElement.appendChild(fragment);

function removeHiddenClass(selector) {
  document.querySelector(selector).classList.remove('hidden');
}

function getRandomItem(array) {
  var index = Math.floor(Math.random() * array.length);
  var randomItem = array[index];
  return randomItem;
}

// eslint-disable-next-line no-console
console.log(WIZARD_PERSONALITY);
// eslint-disable-next-line no-console
console.log(similarListElement);

// function shuffle(array) {
//   for (var k = array.length - 1; k > 0; k--) {
//     var j = Math.floor(Math.random() * (k + 1));
//     var temp = array[j];
//     array[j] = array[k];
//     array[k] = temp;
//   }
//   return array;
// }
