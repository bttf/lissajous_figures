function App() {
  this.grid = new Grid();
}

App.prototype.init = function(canvasWidth, canvasHeight) {
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;

  this.grid.init(0, 0, canvasWidth, canvasHeight);
};

App.prototype.render = function(time) {
};

App.prototype.draw = function(context) {
  this.grid.draw(context);
};
