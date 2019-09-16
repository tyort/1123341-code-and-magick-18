'use strict';
window.renderStatistics = function (ctx, names, times) {
  // Переменные
  var RIGHT_INDENT_X = 155; // Координата "x" отступа слева
  var MAX_SCALE_LENGTH = 100; // Максимальная высота колонки
  var COLUMN_WIDTH = 40; // Ширина каждой колонки
  var MAX_INDEX = 0; // Индекс максимального значения колонки
  var MAX_VALUE = times[MAX_INDEX]; // Значение высочайшей колонки по умолчанию
  // Функция для расчета местоположения облачка и его тени
  var renderCloud = function (color, slip) {
    ctx.beginPath();
    ctx.moveTo(210 - slip, 100 - slip);
    ctx.bezierCurveTo(210 - slip, 0 - slip, 410 - slip, 0 - slip, 410 - slip, 100 - slip);
    ctx.bezierCurveTo(550 - slip, 100 - slip, 550 - slip, 210 - slip, 410 - slip, 210 - slip);
    ctx.bezierCurveTo(410 - slip, 310 - slip, 210 - slip, 310 - slip, 210 - slip, 210 - slip);
    ctx.bezierCurveTo(90 - slip, 210 - slip, 90 - slip, 100 - slip, 210 - slip, 100 - slip);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  renderCloud('rgba(0, 0, 0, 0.7)', 0); // облако
  renderCloud('rgba(169, 175, 232, 1)', 10); // тень облака
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
  // Поиск актуального максимального значения из всех колонок
  for (var i = MAX_INDEX + 1; i < times.length; i++) {
    if (times[i] > MAX_VALUE) {
      MAX_VALUE = times[i];
    }
  }
  // Функция расчета рейтинга в гистограмме для каждого игрока
  var renderPlayer = function (arrayName, arrayIndex, arrayColumnColor) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(arrayName, RIGHT_INDENT_X + 90 * arrayIndex, 240);
    ctx.fillText(Math.floor(times[arrayIndex]), RIGHT_INDENT_X + 90 * arrayIndex, 120 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[arrayIndex]);
    ctx.fillStyle = arrayColumnColor;
    ctx.fillRect(RIGHT_INDENT_X + 90 * arrayIndex, 125 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[arrayIndex], COLUMN_WIDTH, MAX_SCALE_LENGTH / MAX_VALUE * times[arrayIndex]);
  };
  // Цикл для анализа каждого игрока из массива
  for (var j = 0; j < names.length; j++) {
    if (names[j] === 'Вы') {
      renderPlayer(names[j], names.indexOf(names[j]), 'rgba(255, 0, 0, 1)');
    } else {
      renderPlayer(names[j], names.indexOf(names[j]), 'hsl(240, ' + Math.random() * 100 + '%' + ', 50%)');
    }
  }
};
