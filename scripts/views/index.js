function View(rootElement, listeners) {
  this.root = rootElement;
  this.increaseListener = listeners.onIncrease;
  this.decreasListener = listeners.onDecrease;
}

View.prototype.render = function (counters = []) {
  this.clear();

  const fragment = document.createDocumentFragment();

  counters.forEach(function (counter) {
    const li = document.createElement('li');
    li.classList.add('counter-list-item');

    const span = document.createElement('span');
    span.insertAdjacentText('afterbegin', `${counter.value}`);

    const div = document.createElement('div');
    div.classList.add('counter-buttons');

    const incButton = document.createElement('button');
    incButton.insertAdjacentText('afterbegin', '+');
    incButton.addEventListener('click', function () {
      this.increaseListener(counter.id);
    }.bind(this));

    const decButton = document.createElement('button');
    decButton.insertAdjacentText('afterbegin', '-');
    decButton.addEventListener('click', function () {
      this.decreasListener(counter.id);
    }.bind(this));

    li.appendChild(span);
    li.appendChild(div);

    div.appendChild(incButton);
    div.appendChild(decButton);

    fragment.appendChild(li);
  }.bind(this));

  this.root.appendChild(fragment);
}

View.prototype.clear = function () {
  this.root.replaceChildren();
}

export default View;
