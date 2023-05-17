function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function getRandomColor() {
  var color_1 = getRandomNumber(0, 255);
  var color_2 = getRandomNumber(0, 255);
  var color_3 = getRandomNumber(0, 255);
  return 'rgb(' + color_1 + ', ' + color_2 + ', ' + color_3 + ')';
}


var block = document.querySelector('.block');


setInterval(function() {
  var randomColor = getRandomColor();
  block.style.background = randomColor;
}, 500);


function getRandomPosition() {
  var bodyWidth = window.innerWidth;
  var bodyHeight = window.innerHeight;

  var maxLeft = bodyWidth - block.offsetWidth;
  var maxTop = bodyHeight - block.offsetHeight;

  var randomLeft = getRandomNumber(0, maxLeft);
  var randomTop = getRandomNumber(0, maxTop);

  return {
    left: randomLeft,
    top: randomTop
  };
}

setInterval(function() {
  var randomPosition = getRandomPosition();
  block.style.left = randomPosition.left + 'px';
  block.style.top = randomPosition.top + 'px';
}, 1000);
