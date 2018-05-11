
//layout


//array of villains
var villains = [
  {name: "APOCALYPSE", 
  image: "../images/apocalypse.jpg",
  winText: "We stopped Apocalypse! Good job X-Men!", loseText:"You have failed, X-Men, and failure equals death! Now you die ... at the hands of APOCALYPSE!"},

  {name: "SAURON", 
  image: "../images/sauron.jpg", 
  winText: "Good job defeating SAURON! That dinosaur is history.", 
  loseText: "The skies belong to SAURON -- and so do your lives!"}, 
    
  {name: "JUGGERNAUT", 
  image: "../images/juggernaut.jpg", 
  winText: "Nice job, we stopped the JUGGERNAUT!", 
  loseText: "Ha Ha Ha! Nothing stops the JUGGERNAUT!"}, 

  {name: "MYSTIQUE", 
  image: "../images/mystique.jpg", 
  winText: "", 
  loseText: ""}, 

  {name: "STRYFE", 
  image: "../images/stryfe.jpg", 
  winText: "", 
  loseText: ""}, 

  {name: "SENTINELS", 
  image: "../images/sentinels.jpg", 
  winText: "", 
  loseText: ""}, 

  {name: "MOJO", 
  image: "../images/mojo.jpg", 
  winText: "", 
  loseText: ""}, 

  {name: "SINISTER", 
  image: "../images/sinister.jpg", 
  winText: "", 
  loseText: ""},

  {name: "MAGNETO", 
  image: "../images/magneto.jpg", 
  winText: "", 
  loseText: ""},

  {name: "BROOD", 
  image: "../images/brood.jpg", 
  winText: "", 
  loseText: ""},

  {name: "NIMROD", 
  image: "../images/nimrod.jpg", 
  winText: "", 
  loseText: ""},

  {name: "WHITEQUEEN", 
  image: "../images/whitequeen.jpg", 
  winText: "", 
  loseText: ""},

  {name: "SHADOWKING", 
  image: "../images/shadowking.jpg", 
  winText: "", 
  loseText: ""},

  {name: "SABRETOOTH", 
  image: "../images/sabretooth.jpg", 
  winText: "", 
  loseText: ""}, 
]

//loads up javascript
document.addEventListener("DOMContentLoaded", function() { 

//randomly chooses villain, assigns var
var yourVillain = villains[Math.floor(Math.random() * villains.length)];

//sets remaining tries to 8
var remainingTries = 8;

//sets remainingletters to word length
var remainingLetters = yourVillain.name.length;

//sets guess as empty string
var guess = "";

var wrongGuess = "";

//function to decrease letters left to guess
function oneUp() {
  return remainingLetters--;
}

//function to decrease remaining tries
function oneDown() {
  return remainingTries--;
}

//hides villain.name behind _
var answerArray = [];
for (var i = 0; i < yourVillain.name.length; i++) {
 answerArray[i] = "_";
}


//sets keyup to uppercase guess 
document.onkeyup = function(event){
  guess = event.key.toUpperCase();
  for (var j = 0; j < yourVillain.name.length; j++) {
    if (yourVillain.name[j] === guess) {
     answerArray[j] === guess;
     oneUp();
     }
     else {
      guess=wrongGuess;
      console.log(answerArray[j]);
      oneDown();
    }
}
console.log(remainingLetters);
console.log(remainingTries);
};



document.getElementById("wrong").innerHTML = wrongGuess;



//win condition- incomplete
  if (remainingLetters < 1) {
    alert(yourVillain.winText)
    document.getElementById(yourVillain.image)
  }

  //lose condition- incomplete
  if (remainingTries < 1) {
    alert(yourVillain.loseText)
    document.getElementById(yourVillain.image)

  }

  console.log(yourVillain.name);
  console.log(answerArray);
  console.log(remainingLetters);
  console.log(remainingTries)


});

//replace correctly guessed characters with correct letter
//conditional for win/loss
//lose screen with photo, lose text
//win screen with photo, win text
//get music to work