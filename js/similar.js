/* eslint-disable no-console */
'use strict';

(function () {
  var coatColor;
  var eyesColor;
  var DEBOUNCE_INTERVAL = 500;
  var wizards = []; // важно показать глобально переменную wizards!
  window.backend.load(successHandler, errorHandler);

  window.onEyesChange = debounce(function (color) { // вызов функции по истечении DEBOUNCE_INTERVAL
    eyesColor = color;
    updateWizards();
  });

  window.onCoatChange = debounce(function (color) { // вызов функции по истечении DEBOUNCE_INTERVAL
    coatColor = color;
    updateWizards();
  });

  function debounce(cb) {
    var lastTimeout = null;
    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }
      lastTimeout = setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  }

  function getRank(wizard) { // получем рейтинговые очки за совпадения
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(right, left) {
    if (right > left) {
      return 1;
    } else if (right < left) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {
    window.render.rendered(wizards.sort(function (a, b) { // функция переделает массив
      var rankDiff = getRank(b) - getRank(a); // если положительное число, то рейтинг левого игрока больше правого, не меняемся местами
      if (rankDiff === 0) { // если рейтинги одинаковые, то сравним по имени
        rankDiff = namesComparator(a.name, b.name);
      }
      return rankDiff;
    }));
  }

  function successHandler(data) {
    wizards = data; // для функции ниже эта переменная является замыканием!
    updateWizards(); // поэтому здесь переменную wizard можно не объявлять!
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

