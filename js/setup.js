'use strict';

var userDialog = document.querySelector('.setup');
removeHiddenClass(userDialog);
removeHiddenClass(document.querySelector('.setup-similar'));
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
  WIZARD_PERSONALITY[i] = {};
  renderWizard(WIZARD_PERSONALITY[i]);
  generateWizard(similarLastWizardTemplate.cloneNode(true), i);
}
similarListElement.appendChild(fragment);

function renderWizard(wizards) {
  wizards.name = getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES);
  wizards.coatColor = getRandomItem(WIZARD_COAT_COLOR);
  wizards.eyesColor = getRandomItem(WIZARD_EYES_COLOR);
}

function generateWizard(wizardElement, index) {
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_PERSONALITY[index].name;
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_PERSONALITY[index].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_PERSONALITY[index].eyesColor;
  fragment.appendChild(wizardElement);
}

function removeHiddenClass(selector) {
  selector.classList.remove('hidden');
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
