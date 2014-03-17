describe("App.js", function() {
  var app;
  var canvasWidth = 500,
    canvasHeight = 500;
  beforeEach(function() {
    app = new App();
  });

  describe('constructor', function() {
    it ('should instantiate a grid object', function() {
      expect(app.grid).toBeDefined();
    });
  });

  describe('init', function() {
    it ('should be a function', function() {
      expect(typeof app.init).toBe('function');
    });
    it ('should have an arity of two, for canvasWidth and canvasHeight', function() {
      expect(app.init.length).toEqual(2);
    });
    it ('should set object properties canvasWidth and canvasHeight according to args', function() {
      app.init(canvasWidth, canvasHeight);
      expect(app.canvasWidth).toEqual(canvasWidth);
      expect(app.canvasHeight).toEqual(canvasHeight);
    });
    it ('should init the grid object', function() {
      var grid = {
        'init': function() {},
      };
      spyOn(grid, 'init');
      app.grid = grid;
      app.init(canvasWidth, canvasHeight);
      expect(grid.init).toHaveBeenCalled();
    });
  });

  describe('render', function() {
    it ('should be a function', function() {
      expect(typeof app.render).toBe('function');
    });
    it ('should have an arity of one, for time', function() {
      expect(app.render.length).toEqual(1);
    });
  });

  describe('draw', function() {
    it ('should be a function', function() {
      expect(typeof app.draw).toBe('function');
    });
    it ('should have an arity of one, for context', function() {
      expect(app.draw.length).toEqual(1);
    });
    it ('should call the grid.draw method', function() {
      var context = {};
      var grid = {
        'draw': function() {},
      };
      spyOn(grid, 'draw');
      app.grid = grid;
      app.draw(context);
      expect(grid.draw).toHaveBeenCalledWith(context);
    });
  });
});
