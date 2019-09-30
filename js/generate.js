/* eslint-disable no-console */
'use strict';

(function () {
  var WIZARD_PERSONALITY = [];
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['red', 'black', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

  function getRandomItem(array) {
    var index = Math.floor(Math.random() * array.length);
    var randomItem = array[index];
    return randomItem;
  }

  window.setup = {
    WIZARD_PERSONALITY: WIZARD_PERSONALITY,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT_COLOR: WIZARD_COAT_COLOR,
    WIZARD_EYES_COLOR: WIZARD_EYES_COLOR,
    WIZARD_FIREBALL_COLOR: WIZARD_FIREBALL_COLOR,
    getRandomItem: function (array) {
      var index = Math.floor(Math.random() * array.length);
      var randomItem = array[index];
      return randomItem;
    }
  };
})();

