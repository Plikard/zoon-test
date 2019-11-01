import '../sass/style.scss'
import './ui'

import Panels from './Panels'
import Dashboard from './Dashboard'

let panelsWrapper = document.querySelector('.js-panels'),
  states = ['purple', 'orange', 'gray'],
  jsonData = [
    {
      id: 1,
      title: 'Google',
      state: 'purple',
      rating: 5, // рейтинг
      review: 4, // отзывы
      reply: 3, // неотвеченные
      update: 2 // обновления
    }, {
      id: 2,
      title: 'Yandex',
      state: 'gray',
      rating: 4,
      review: 3,
      reply: 2,
      update: 1
    }, {
      id: 3,
      title: 'Rambler',
      state: 'orange',
      rating: 3,
      review: 2,
      reply: 1,
      update: 0
    }, {
      id: 4,
      title: '2gis',
      state: 'gray',
      rating: 2,
      review: 1,
      reply: 0,
      update: 0
    }, {
      id: 5,
      title: 'Waze',
      state: 'gray',
      rating: 1,
      review: 0,
      reply: 0,
      update: 0
    }
  ],
  panels = [];

let Board = new Dashboard(jsonData);

for (let data of jsonData) {
  let panel = new Panels(data);
  panels[data.id] = panel;
  panelsWrapper.append(panel.element);
}

function r(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomObject() {
  let obj = jsonData[Math.floor(Math.random() * jsonData.length)];
  Object.assign(obj, {
    state: states[Math.floor(Math.random() * states.length)],
    rating: r(1, 5),
    review: r(0, 200),
    reply: r(0, 20),
    update: r(0, 5)
  });

  return obj;
}

setInterval(function () {
  let obj = getRandomObject();
  jsonData = jsonData.map(item => item.id === obj.id ? obj : item);
  update(obj);
}, r(10, 25) * 1000);


function update(obj) {
  Board.updateWidgets(jsonData)
  panels[obj.id].setData(obj)
}