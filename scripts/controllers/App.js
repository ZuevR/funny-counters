import View from '../views/index.js';
import Counter from '../models/Counter.js';

const listElement = document.querySelector('ul.counter-list');
const addBtn = document.querySelector('.add-btn button');

function App() {
  this.counterList = [];
  this.view = new View(listElement, {
    onIncrease: (function (id) { this.increase(id); }).bind(this),
    onDecrease: (function (id) { this.decrease(id); }).bind(this)
  });
}

App.prototype.init = function () {
  addBtn.addEventListener('click', this.addCounter.bind(this));
}

App.prototype.addCounter = function () {
  const counter = new Counter(Date.now());
  this.counterList.push(counter);

  this.view.render(this.counterList);
}

App.prototype.increase = function (id) {
  const counter = this.counterList.find(function (counter) {
    return counter.id === id;
  });
  counter.increase();
  this.view.render(this.counterList);
}

App.prototype.decrease = function (id) {
  const counter = this.counterList.find(function (counter) {
    return counter.id === id;
  });
  counter.decrease();
  this.view.render(this.counterList);
}

export default App;
