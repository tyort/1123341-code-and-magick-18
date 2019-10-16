/* eslint-disable no-console */
'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');
  console.log(fileChooser);
  console.log(preview);

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0]; // убеждаемся что файл существует после change

    var fileName = file.name.toLowerCase();
    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result; // результат Data URL
        console.log(reader.result); // результат только когда отработал load
      });
      console.log(reader.result);
      reader.readAsDataURL(file);
    }

  });

})();
