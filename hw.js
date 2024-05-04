let ladder = {
  object: 0,
  up: function () {
    this.object++;
    return this;
  },
  down: function () {
    this.object--;
    return this;
  },
  showStep: function () {
    alert(this.object);
    return this;
  },
};

ladder.up().up().down().showStep();
