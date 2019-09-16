'use strict';
window.renderStatistics = function (ctx, names, times) {
  // Координаты тени облачка
  ctx.beginPath();
  ctx.moveTo(210, 100);
  ctx.bezierCurveTo(210, 0, 410, 0, 410, 100);
  ctx.bezierCurveTo(550, 100, 550, 210, 410, 210);
  ctx.bezierCurveTo(410, 310, 210, 310, 210, 210);
  ctx.bezierCurveTo(90, 210, 90, 100, 210, 100);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();
  // Координаты облачка
  ctx.beginPath();
  ctx.moveTo(200, 90);
  ctx.bezierCurveTo(200, -10, 400, -10, 400, 90);
  ctx.bezierCurveTo(540, 90, 540, 200, 400, 200);
  ctx.bezierCurveTo(400, 300, 200, 300, 200, 200);
  ctx.bezierCurveTo(80, 200, 80, 90, 200, 90);
  ctx.closePath();
  ctx.fillStyle = 'rgba(169, 175, 232, 1)';
  ctx.fill();
  // Текст поздравления внутри облачка
  ctx.fillStyle = 'black';
  ctx.font = '16px Pt Mono';
  ctx.fillText('Ура вы победили!', 220, 65);
  ctx.fillText('Список результатов:', 210, 80);
  // Гистограмма
  ctx.fillStyle = 'white';
  ctx.fillRect(135, 100, 350, 150);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(135, 100, 350, 150);

  // Глобальные переменные
  var xFrstPlr = 155; // Координата "x" первого имени в списке
  var xFrstClmn = 155; // Координата "x" первой колонки в списке
  var xFrstAmnt = 155; // Координата "х" указания количества миллисекунд для первого игрока
  var MAX_SCALE_LENGTH = 100; // Максимальная высота колонки
  var COLUMN_WIDTH = 40; // Ширина каждой колонки
  var MAX_INDEX = 0; // Индекс максимального значения колонки
  var MAX_VALUE = times[MAX_INDEX]; // Значение высочайшей колонки по умолчанию

  // Поиск актуального максимального значения из всех колонок
  for (var i = MAX_INDEX + 1; i < times.length; i++) {
    if (times[i] > MAX_VALUE) {
      MAX_VALUE = times[i];
    }
  }
  // Рейтинг гистограмме
  for (var j = 0; j < names.length; j++) { // пришлось сделать для "Вы" отдельный цикл, чтобы колонка не перемещалась
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'black';
      ctx.font = '16px PT Mono';
      ctx.fillText(names[j], xFrstPlr, 240);
      ctx.fillText(Math.floor(times[names.indexOf(names[j])]), xFrstAmnt, 120 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[names.indexOf(names[j])]);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(xFrstClmn, 125 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[names.indexOf(names[j])], COLUMN_WIDTH, MAX_SCALE_LENGTH / MAX_VALUE * times[names.indexOf(names[j])]);
    }
  }
  for (var k = 0; k < names.length; k++) {
    if (names[k] !== 'Вы') {
      ctx.fillStyle = 'black';
      ctx.font = '16px PT Mono';
      ctx.fillText(names[k], xFrstPlr += 90, 240);
      ctx.fillText(Math.floor(times[names.indexOf(names[k])]), xFrstAmnt += 90, 120 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[names.indexOf(names[k])]);
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%' + ', 50%)';
      ctx.fillRect(xFrstClmn += 90, 125 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[names.indexOf(names[k])], COLUMN_WIDTH, MAX_SCALE_LENGTH / MAX_VALUE * times[names.indexOf(names[k])]);
    }
  }
};
