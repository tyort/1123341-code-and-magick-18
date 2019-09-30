/* eslint-disable no-console */
'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var isClosedAllowed = true;

  function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE && isClosedAllowed === true) {
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

  setupUserName.addEventListener('blur', function () {
    isClosedAllowed = true;
  });

  setupUserName.addEventListener('focus', function () {
    isClosedAllowed = false;
  });

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

  // сообщение о невалидности введенных данных
  setupUserName.addEventListener('invalid', function () {
    if (setupUserName.validity.tooshort || setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity('Тебе нужно больше букв, дружище!');
    }
  });
})();
