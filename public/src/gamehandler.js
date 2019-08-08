
class gameHandler {
  constructor() {
    this.runningScore = 0;
    this.frames = [[0, 0]];
  };

  scoreHandler(score) {
    console.log("frames")
    console.log(this.frames)
    console.log("handler score:")
    console.log(score)
    if(this.frames.length < 10){
      this._firstNineFrameScoreCalculator(score)
    } else {
      this._lastFrameScoreCalculator(score)
    };
    console.log(this.frames)
  };

  _firstNineFrameScoreCalculator(score) {
    if(this._isSpareOrStrike() === 'spare') {
      this._spareScoreCalculator(score)
    } else if(this._isSpareOrStrike() === 'strike') {
      this._strikeScoreCalculator(score)
    } else {
      this._noStrikeSpareScoreCalculator()
    }
    this.frames.push(score);
    console.log("F9 runningScore:");
    console.log(this.runningScore);
  };

  _isSpareOrStrike() {
    if(this.frames.slice(-1)[0][0] === 10) {
      return 'strike';
    } else if(this.frames.slice(-1)[0].reduce((a, b) => a + b) === 10) {
      return 'spare';
    } else {
      return 'neither'
    };
  };

  _spareScoreCalculator(score) {
    this.runningScore += (this.frames.slice(-1)[0].reduce((a, b) => a + b) + score[0]);
    console.log('spare')
    console.log(this.runningScore)
  };

  _strikeScoreCalculator(score) {
    if(this.frames.slice(-2)[0][0] === 10) {
      this.runningScore += (this.frames.slice(-2)[0][0] + this.frames.slice(-1)[0][0] + score[0] + score[1])
    } else {
    this.runningScore += (this.frames.slice(-1)[0][0] + score[0] + score[1])
    };
    console.log('strike')
    console.log(this.runningScore)
  };

  _noStrikeSpareScoreCalculator() {
    this.runningScore += this.frames.slice(-1)[0].reduce((a, b) => a + b);
    console.log('noSS')
    console.log(this.runningScore)
  };

  _lastFrameScoreCalculator(score) {
    this._firstNineFrameScoreCalculator(score)
    this.runningScore += score.reduce((a, b) => a + b);
    console.log("F10 runningScore:");
    console.log(this.runningScore);
  };

  _perfectGameScoreCalculator() {
    if(this.runningScore === 220) {
      this.runningScore += 80;
    };
  };
};
