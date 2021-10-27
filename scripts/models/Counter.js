function Counter(id, value = 0, step = 1) {
  this.id = id;
  this.value = value;
  this.step = step;
}

Counter.prototype.increase = function () {
  this.value += this.step;
}

Counter.prototype.decrease = function () {
  this.value -= this.step;
}

export default Counter;
