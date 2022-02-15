/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function random(from, to) {
  return parseInt(from + Math.random() * to - from);
}

let currentDrag;
let axisX = 0;
let axisY = 0;

document.addEventListener('mousemove', (e) => {
  if (currentDrag) {
    currentDrag.style.top = e.clientY - axisY + 'px';
    currentDrag.style.left = e.clientX - axisX + 'px';
  }
});

export function createDiv() {
  const div = document.createElement('div');
  const minSize = 20;
  const maxSize = 200;

  div.className = 'draggable-div';
  div.style.background =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  div.style.top = random(0, window.innerHeight) + 'px';
  div.style.left = random(0, window.innerWidth) + 'px';
  div.style.width = random(minSize, maxSize) + 'px';
  div.style.height = random(minSize, maxSize) + 'px';

  div.addEventListener('mousedown', (e) => {
    currentDrag = div;
    axisX = e.offsetX;
    axisY = e.offsetY;
  });

  div.addEventListener('mouseup', () => (currentDrag = false));

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
