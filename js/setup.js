'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizard = setup.querySelector('.setup-wizard');
var setupPlayer = setup.querySelector('.setup-player');
var wizardCoat = setupWizard.children[0].children[0];
var wizardEyes = setupWizard.children[0].children[2];
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
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
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var permission = true;

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

setupUserName.addEventListener('blur', function () {
  permission = true;
});

setupUserName.addEventListener('focus', function () {
  permission = false;
});

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE && permission === true) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

function changeCoat() {
  wizardCoat.style.fill = getRandomItem(WIZARD_COAT_COLOR);
  setupPlayer.children[0].children[1].value = wizardCoat.style.fill;
}
wizardCoat.addEventListener('click', function () {
  changeCoat();
});

function changeEyes() {
  wizardEyes.style.fill = getRandomItem(WIZARD_EYES_COLOR);
  setupPlayer.children[0].children[2].value = wizardEyes.style.fill;
}
wizardEyes.addEventListener('click', function () {
  changeEyes();
});

function changeFireball() {
  wizardFireball.style.background = getRandomItem(WIZARD_FIREBALL_COLOR);
  setupPlayer.children[1].children[1].value = wizardFireball.style.background;
}
wizardFireball.addEventListener('click', function () {
  changeFireball();
});
