'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarLastWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var WIZARD_PERSONALITY = [];
var WIZARD_NAMES = shuffle(['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']);
var WIZARD_SURNAMES = shuffle(['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']);
var WIZARD_COAT_COLOR = shuffle(['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']);
var WIZARD_EYES_COLOR = shuffle(['red', 'black', 'blue', 'yellow', 'green']);

for (var i = 0; i < 4; i++) {
  WIZARD_PERSONALITY[i] = {};
  renderWizard(WIZARD_PERSONALITY[i], similarLastWizardTemplate.cloneNode(true), i);
}
similarListElement.appendChild(fragment);

function renderWizard(wizard, wizardElement, index) {
  wizard.name = WIZARD_NAMES[index] + ' ' + WIZARD_SURNAMES[index];
  wizard.coatColor = WIZARD_COAT_COLOR[index];
  wizard.eyesColor = WIZARD_EYES_COLOR[index];
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  fragment.appendChild(wizardElement);
}

function shuffle(massive) {
  for (var k = massive.length - 1; k > 0; k--) {
    var j = Math.floor(Math.random() * (k + 1));
    var temp = massive[j];
    massive[j] = massive[k];
    massive[k] = temp;
  }
  return massive;
}

console.log(WIZARD_PERSONALITY);
console.log(similarListElement);
