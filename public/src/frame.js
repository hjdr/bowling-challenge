
class Frame {
  constructor() {
    this.score = [[0, 0]]
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
    }
    console.log("THIS SCORE:")
    console.log(this.score)
  };

  frameScore() {
    if(this.score.slice(-1)[0].length > 1) {
      return this.score.slice(-1)[0];
    };
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
  }
};
