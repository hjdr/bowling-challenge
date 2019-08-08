
describe('Frame', function () {
  let frame;

  var gamehandler = jasmine.createSpyObj('gameHandler', [ 'scoreHandler']);

  beforeEach(function () {
    frame = new Frame(gamehandler);
  });



  describe('.roll', function () {

    it('adds one score to score array', function () {
      frame.roll(10);
      frame.frameScore();
      expect(frame.score).toEqual([[0, 0], [10, 0]])
    });

    it('adds two scores to score array', function () {
      frame.roll(3);
      frame.frameScore()
      frame.roll(6);
      frame.frameScore();
      expect(frame.score).toEqual([[0, 0], [3, 6]]);
    });
  });

  describe('.frameScore', function() {
    
    it('outputs the current frames final score' , function() {
      frame.roll(3);
      frame.roll(6);
      frame.roll(6);
      expect(frame.score).toEqual([[0, 0], [3, 6], [6]]);
    });

    it('outputs the current frames final score' , function() {
      frame.roll(10);
      frame.frameScore();
      frame.roll(10);
      frame.frameScore();
      frame.roll(10);
      frame.frameScore();
      expect(frame.score).toEqual([[0, 0], [10, 0], [10, 0], [10, 0]]);
    });

    it('outputs the current frames final score' , function() {
      frame.roll(1);
      frame.frameScore();
      frame.roll(4);
      frame.frameScore();
      frame.roll(4);
      frame.frameScore();
      frame.roll(5);
      frame.frameScore();
      frame.roll(6);
      frame.frameScore();
      frame.roll(4);
      frame.frameScore();
      frame.roll(5);
      frame.frameScore();
      frame.roll(5);
      frame.frameScore();
      frame.roll(10);
      frame.frameScore();
      frame.roll(0);
      frame.frameScore();
      frame.roll(1);
      frame.frameScore();
      frame.roll(7);
      frame.frameScore();
      frame.roll(3);
      frame.frameScore();
      frame.roll(6);
      frame.frameScore();
      frame.roll(4);
      frame.frameScore();
      frame.roll(10);
      frame.frameScore();
      frame.roll(2);
      frame.frameScore();
      frame.roll(8);
      frame.frameScore();
      frame.roll(6);
      frame.frameScore();
      expect(frame.score).toEqual([[0, 0], [1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8, 6]]);
    });
  });
});
