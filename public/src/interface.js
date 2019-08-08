$( document ).ready(function() {

  let gamehandler = new gameHandler();
  let frame = new Frame();

  $('#current-score').text(gamehandler.runningScore)
  $('#current-frame').text(gamehandler.frames.length)
  $('#frame-position').text(frame.score.length)
  
  $('#0-score').click(function() {
    frame.roll(0)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#1-score').click(function() {
    frame.roll(1)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#2-score').click(function() {
    frame.roll(2)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#3-score').click(function() {
    frame.roll(3)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#4-score').click(function() {
    frame.roll(4)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#5-score').click(function() {
    frame.roll(5)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#6-score').click(function() {
    frame.roll(6)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#7-score').click(function() {
    frame.roll(7)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#8-score').click(function() {
    frame.roll(8)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#9-score').click(function() {
    frame.roll(9)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  $('#10-score').click(function() {
    frame.roll(10)
    updateFramePosition()
    logFrameScore()
    updateCurrentFrame() 
  });

  function updateRunningScore() {
    $('#current-score').text(gamehandler.runningScore)
  };

  function updateFramePosition() {
    $('#frame-position').text(frame.score.length)
  };

  function updateCurrentFrame() {
    $('#current-frame').text(gamehandler.frames.length)
  };

  function logFrameScore() {
    if(frame.score.length < 11) {
      if(frame.score.slice(-1)[0].length === 2) {
        gamehandler.scoreHandler(frame.frameScore())
      }
    } else {
      console.log("lfs else called")
      if(frame.score.slice(-1)[0].length === 2 &&       frame.score.reduce((a, b) => a + b) < 10) {
        console.log("1st if")
        gamehandler.scoreHandler(frame.frameScore())
      } else if(frame.score.slice(-1)[0].length === 3) {
        console.log("2nd if")
        gamehandler.scoreHandler(frame.frameScore())
      }
    }
    updateRunningScore()
  };
});