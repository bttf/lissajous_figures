function Grid() {
}

Grid.prototype.init = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

Grid.prototype.draw = function(context) {
  this.interval = 25;

  context.strokeStyle = '#cccccc';

  for (var i = this.x + this.interval; i < this.x + this.width; i += this.interval) {
    context.beginPath();
    context.moveTo(i, this.y);
    context.lineTo(i, this.y + this.height);
    context.stroke();
  }

  for (var i = this.y + this.interval; i < this.y + this.height; i += this.interval) {
    context.beginPath();
    context.moveTo(this.x, i);
    context.lineTo(this.x + this.width, i);
    context.stroke();
  }
};
