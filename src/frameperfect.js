$(document).ready(function () {
  var timing = Timing();

  var startButton = $("#startButton");
  startButton.click(function () {
    startSound(timing);
  });
});

// démarre le son et les actions synchros
function startSound(timing) {
  var audioPlayer = $("#audioPlayer");
  if (audioPlayer.ready) {
    audioPlayer.trigger("play");

    for (var i = 0; i < timing.times.length; i++) {
      showAfterTiming(timing.times[i].name, timing.times[i].timing);
    }
  }
}

// Promise to wait the right timing
function resolveAfterXms(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, x);
  });
}

// async function which render the times[i].name after it's times[i].timing.
async function showAfterTiming(whatToShow, timingToShow) {
  await resolveAfterXms(timingToShow);
  $("#p1").append(whatToShow + " ");
}

// function to give the timing of a scripted mp3 (JSON)
function Timing() {
  return {
    "title": "Test",
    "description": "timing des nombres dits dans le mp3",
    "times": [
      {
        "name": "un",
        "timing": 868
      },
      {
        "name": "un",
        "timing": 1666
      },
      {
        "name": "deux",
        "timing": 1903
      },
      {
        "name": "deux",
        "timing": 2856
      },
      {
        "name": "trois",
        "timing": 3568
      },
      {
        "name": "un",
        "timing": 4561
      },
      {
        "name": "trois",
        "timing": 5345
      }
    ]
  };
}