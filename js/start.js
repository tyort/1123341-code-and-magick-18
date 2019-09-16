'use strict';
window.renderStatistics = function (ctx, names, times) {
  // Переменные
  var RIGHT_INDENT_X = 155; // Координата "x" отступа слева
  var MAX_SCALE_LENGTH = 100; // Максимальная высота колонки
  var COLUMN_WIDTH = 40; // Ширина каждой колонки
  var MAX_INDEX = 0; // Индекс максимального значения колонки
  var MAX_VALUE = times[MAX_INDEX]; // Значение высочайшей колонки по умолчанию
  // Функция для расчета местоположения облачка и его тени
  var renderCloud = function (color, oneDot, twoDot, threeDot, fourDot, fiveDot, sixDot) {
    ctx.beginPath();
    ctx.moveTo(oneDot, twoDot);
    ctx.bezierCurveTo(oneDot, threeDot, fourDot, threeDot, fourDot, twoDot);
    ctx.bezierCurveTo(fiveDot, twoDot, fiveDot, oneDot, fourDot, oneDot);
    ctx.bezierCurveTo(fourDot, sixDot, oneDot, sixDot, oneDot, oneDot);
    ctx.bezierCurveTo(twoDot, oneDot, twoDot, twoDot, oneDot, twoDot);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  renderCloud('rgba(0, 0, 0, 0.7)', 210, 100, 0, 410, 550, 310); // облако
  renderCloud('rgba(169, 175, 232, 1)', 200, 90, -10, 400, 540, 300); // тень облака
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
      renderPlayer(names[j], j, 'rgba(255, 0, 0, 1)');
    } else {
      renderPlayer(names[j], j, 'hsl(240, ' + Math.random() * 100 + '%' + ', 50%)');
    }
  }
};
