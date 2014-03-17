describe("Grid", function() {
  var grid,
    x,
    y,
    width,
    height;
  beforeEach(function() {
    x = 1;
    y = 1;
    width = 500;
    height = 500;
    grid = new Grid();
    grid.init(x, y, width, height);
  });

  describe("init", function() {
    it ("should have a 'init' function", function() {
      expect(typeof grid.init).toBe('function');
    });
    it ("should have an arity of four, for x, y, width, height", function() {
      expect(grid.init.length).toEqual(4);
    });
    it ("should set Grid object properties x, y, width and height to args passed", function() {
      var x = 1235,
       y = 6789,
       width = 500,
       height = 500;
      grid.init(x, y, width, height);
      expect(grid.x).toEqual(x);
      expect(grid.y).toEqual(y);
      expect(grid.width).toEqual(width);
      expect(grid.height).toEqual(height);
    });
  });

  describe("draw", function() {
    var context;
    beforeEach(function() {
      context = {
        'beginPath': function() {},
      'moveTo': function() {},
      'lineTo': function() {},
      'stroke': function() {},
      };
    });
    it ("should have a 'draw' function", function() {
      expect(typeof grid.draw).toBe('function');
    });
    it ("should have an arity of one, for context", function() {
      expect(grid.draw.length).toEqual(1);
    });
    it ("should have an interval defined for x and y lines", function() {
      grid.draw(context);
      expect(grid.interval).toBeDefined();
    });
    it ("should set lineColor to something other than black", function() {
      grid.draw(context);
      expect(context.strokeStyle).toBeDefined();
      expect(context.strokeStyle).not.toBe('#000000');
    });
    it ("should draw x-axis lines starting from x, y that are grid.width wide and repeat until grid.height", function() {
      spyOn(context, 'beginPath');
      spyOn(context, 'moveTo');
      spyOn(context, 'lineTo');
      spyOn(context, 'stroke');

      grid.draw(context);

      expect(context.beginPath).toHaveBeenCalled();
      expect(context.stroke).toHaveBeenCalled();
      for (var i = grid.y; i < grid.y + grid.height; i += grid.interval) {
        expect(context.moveTo).toHaveBeenCalledWith(grid.x, i);
        expect(context.lineTo).toHaveBeenCalledWith(grid.x + grid.width, i);
      }
    });
    it ("should draw y-axis lines starting from x, y that have a height of grid.height and repeat until grid.width is reached", function() {
      spyOn(context, 'beginPath');
      spyOn(context, 'moveTo');
      spyOn(context, 'lineTo');
      spyOn(context, 'stroke');

      grid.draw(context);

      expect(context.beginPath).toHaveBeenCalled();
      expect(context.stroke).toHaveBeenCalled();
      for (var i = grid.x; i < grid.x + grid.width; i += grid.interval) {
        expect(context.moveTo).toHaveBeenCalledWith(i, grid.y);
        expect(context.lineTo).toHaveBeenCalledWith(i, grid.y + grid.height);
      }
    });
  });
});
