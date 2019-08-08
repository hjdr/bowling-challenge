
class Frame {
  constructor(gamehandler) {
    this.score = [[0, 0]]
    this.gamehandler = gamehandler
  };

  roll(rollScore) {
    if(this._isFrameTen()) {
     this._frameTen(rollScore)
    } else  {
      if(this.score.slice(-1)[0].length === 2 && rollScore === 10){ 
        this.score.push([10, 0]);
      } else if(this.score.slice(-1)[0].length === 2) {
        this.score.push([rollScore])
      } else {
        this.score.slice(-1)[0].push(rollScore)
      };
      this.frameScore() 
    }
    console.log("THIS SCORE:")
    console.log(this.score)
  };

  frameScore() {
    if(this.score.length < 11) {
      if(this.score.slice(-1)[0].length === 2) {
        this.gamehandler.scoreHandler(this._currentFrame())
      }
    } else {
      console.log("lfs else called")
      if(this.score.slice(-1)[0].length === 2 &&       this.score.reduce((a, b) => a + b) < 10) {
        console.log("1st if")
        this.gamehandler.scoreHandler(this._currentFrame())
      } else if(this.score.slice(-1)[0].length === 3) {
        console.log("2nd if")
        this.gamehandler.scoreHandler(this._currentFrame())
      }
    }
  };

  _isFrameTen() {
    if(this.score.length === 10 && this.score.slice(-1)[0].length === 2) {
      return true
      } else if(this.score.length === 11) {
        return true
      };
    };

  _frameTen(rollScore) {
    if(this.score.length === 10){ 
      this.score.push([rollScore]);
    } else {
      this.score.slice(-1)[0].push(rollScore)
    };
    this.frameScore()
  }

  _currentFrame() {
    return this.score.slice(-1)[0];
  }
};
