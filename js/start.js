'use strict';
window.renderStatistics = function (ctx, names, times) {
  var RIGHT_INDENT_X = 155; // Координата "x" отступа слева
  var MAX_SCALE_LENGTH = 100; // Максимальная высота колонки
  var COLUMN_WIDTH = 40; // Ширина каждой колонки
  var MAX_VALUE = Math.max.apply(null, times); // Поиск максимального значения (мс) из всех колонок

  renderCloud('rgba(0, 0, 0, 0.7)', 210, 100, 0, 410, 550, 310); // Облако
  renderCloud('rgba(169, 175, 232, 1)', 200, 90, -10, 400, 540, 300); // Тень облака

  // Текст поздравления внутри облачка
  ctx.fillStyle = 'black';
  ctx.font = '16px Pt Mono';
  ctx.fillText('Ура вы победили!', 220, 65);
  ctx.fillText('Список результатов:', 210, 80);

  // Гистограмма
  ctx.fillStyle = 'white';
  ctx.fillRect(135, 100, 350, 150);

  // Рейтинг игроков
  for (var i = 0; i < names.length; i++) {
    renderPlayer(names[i], i);
  }

  function renderCloud(color, oneDot, twoDot, threeDot, fourDot, fiveDot, sixDot) {
    ctx.beginPath();
    ctx.moveTo(oneDot, twoDot);
    ctx.bezierCurveTo(oneDot, threeDot, fourDot, threeDot, fourDot, twoDot);
    ctx.bezierCurveTo(fiveDot, twoDot, fiveDot, oneDot, fourDot, oneDot);
    ctx.bezierCurveTo(fourDot, sixDot, oneDot, sixDot, oneDot, oneDot);
    ctx.bezierCurveTo(twoDot, oneDot, twoDot, twoDot, oneDot, twoDot);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function renderPlayer(name, index) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(name, RIGHT_INDENT_X + 90 * index, 240);
    ctx.fillText(Math.floor(times[index]), RIGHT_INDENT_X + 90 * index, 120 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[index]);
    ctx.fillStyle = name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    ctx.fillRect(RIGHT_INDENT_X + 90 * index, 125 + MAX_SCALE_LENGTH - MAX_SCALE_LENGTH / MAX_VALUE * times[index], COLUMN_WIDTH, MAX_SCALE_LENGTH / MAX_VALUE * times[index]);
  }
};
