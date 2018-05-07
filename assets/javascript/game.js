
//layout

var randomVillain = Math.floor( Math.random() * 16);
var villains = [
  {
name: "Apocalypse", 
image: "../images/",
winText: "It is Apocalypse! Good job X-Men!", loseText:"You have failed, X-Men, and failure equals death! Now you die ... at the hands of Apocalypse!" 
},

  {name: "SAURON", image: "", winText: "", loseText: ""}, 
  {name: "JUGGERNAUT", image: "", winText: "", loseText: ""}, 
  {name: "MYSTIQUE", image: "", winText: "", loseText: ""}, 
  {name: "STRYFE", image: "", winText: "", loseText: ""}, 
  {name: "PYRO", image: "", winText: "", loseText: ""}, 
  {name: "SENTINELS", image: "", winText: "", loseText: ""}, 
  {name: "MOJO", image: "", winText: "", loseText: ""}, 
  {name: "SINISTER", image: "", winText: "", loseText: ""}, 
  {name: "MAGNETO", image: "", winText: "", loseText: ""}, 
  {name: "STRYKER", image: "", winText: "", loseText: ""}, 
  {name: "NIMROD", image: "", winText: "", loseText: ""}, 
  {name: "WHITEQUEEN", image: "", winText: "", loseText: ""}, 
  {name: "SHADOWKING", image: "", winText: "", loseText: ""}, 
  {name: "SABRETOOTH", image: "", winText: "", loseText: ""}, 
]

var yourVillain = villains[Math.floor(Math.random() * villains.length)];

var answerArray = [];
for (var i = 0; i < yourVillain.name.length; i++) {
 answerArray[i] = "_";
}

for (var j = 0; j < yourVillain.name.length; j++) {
  if (yourVillain.name[j] === guess) {
   answerArray[j] = guess;
   }
  }

var remainingLetters = yourVillain.name.length;

var remainingTries; 

var guess = document.onkeyup;

document.addEventListener("DOMContentLoaded", function() { 
console.log(yourVillain.name);
console.log(answerArray);
console.log(this.answerArray);
});

//replace correctly guessed characters with correct letter
//countdown of incorrect guesses
//conditional for win/loss
//lose screen with photo, lose text
//win screen with photo, win text
//get music to work