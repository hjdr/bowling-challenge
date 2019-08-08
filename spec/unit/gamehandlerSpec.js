
describe('gamehandler', function() {
  let gamehandler;

  beforeEach(function() { 
    gamehandler = new gameHandler();
  });
  
  describe('.scoreHandler', function() {

    it('calculates the score for a full game with spare last frame', function(){
      gamehandler.scoreHandler([1, 4])
      gamehandler.scoreHandler([4, 5])
      gamehandler.scoreHandler([6, 4])
      gamehandler.scoreHandler([5, 5])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([0, 1])
      gamehandler.scoreHandler([7, 3])
      gamehandler.scoreHandler([6, 4])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([2, 8, 6])
      expect(gamehandler.runningScore).toEqual(133)
    });

    it('calculates the score for a full game no spare/strike last frame', function(){
      gamehandler.scoreHandler([1, 4])
      gamehandler.scoreHandler([4, 5])
      gamehandler.scoreHandler([6, 4])
      gamehandler.scoreHandler([5, 5])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([0, 1])
      gamehandler.scoreHandler([7, 3])
      gamehandler.scoreHandler([6, 4])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([2, 7])
      expect(gamehandler.runningScore).toEqual(125)
    });

    it('calculates the score for a full game with strike last frame', function(){
      gamehandler.scoreHandler([1, 4])
      gamehandler.scoreHandler([4, 5])
      gamehandler.scoreHandler([6, 4])
      gamehandler.scoreHandler([5, 5])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([0, 1])
      gamehandler.scoreHandler([7, 3])
      gamehandler.scoreHandler([6, 4])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 10, 9])
      expect(gamehandler.runningScore).toEqual(156)
    });

    it('calculates the score for a full gutter game', function(){
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      gamehandler.scoreHandler([0, 0])
      expect(gamehandler.runningScore).toEqual(0)
    });

    it('calculates the score for a perfect game', function(){
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 0])
      gamehandler.scoreHandler([10, 10, 10])
      expect(gamehandler.runningScore).toEqual(300)
    });
  }); 
})
