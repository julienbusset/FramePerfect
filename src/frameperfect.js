$(document).ready(function () {
    console.log(Timing());
});


// fonction pour donner le timing d'un mp3 scripté dans un JSON
function Timing () {
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