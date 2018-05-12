
//array of villains
var villains = [
  {name: "APOCALYPSE", 
  image: "../images/apocalypse.jpg",
  winText: "We stopped Apocalypse! Good job X-Men!", 
  loseText:"You have failed, X-Men, and failure equals death! Now you die ... at the hands of APOCALYPSE!"},

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
  winText: "MYSTIQUE can't hide from the X-Men! Great job!", 
  loseText: "It is I, MYSTIQUE! You X-Men are so easily fooled."}, 

  {name: "STRYFE", 
  image: "../images/stryfe.jpg", 
  winText: "Good job defeating STRYFE, X-Men!", 
  loseText: "Die, X-Men! Now the world will know to fear STRYFE!"}, 

  {name: "SENTINELS", 
  image: "../images/sentinels.jpg", 
  winText: "We defeated the SENTINELS!", 
  loseText: "Mutants destroyed. SENTINELS returning to base."}, 

  {name: "MOJO", 
  image: "../images/mojo.jpg", 
  winText: "MOJO? I didn't realize that guy was still around.", 
  loseText: "I won? I won! Bow before MOJO!"}, 

  {name: "SINISTER", 
  image: "../images/sinister.jpg", 
  winText: "That was a close one. We defeated MR. SINISTER!", 
  loseText: "It takes more than a ragtag band of mutants to defeat MR. SINISTER!"},

  {name: "MAGNETO", 
  image: "../images/magneto.jpg", 
  winText: "With your help, we defeated our greatest foe, MAGNETO!", 
  loseText: "Greetings, X-Men. I bid you welcome to the site of your final battleground. You are going to die here, mutants. And neither your powers nor all your skills can save you from my wrath! Look on me, X-Men for I am your oldest, deadliest foe. Master of the legion of evil mutants -- and soon to be lord of all the world! I -- am -- MAGNETO!!"},

  {name: "BROOD", 
  image: "../images/brood.jpg", 
  winText: "It wasn't easy, but we beat the BROOD!", 
  loseText: "We are the BROOD, and now, you are too!"},

  {name: "NIMROD", 
  image: "../images/nimrod.jpg", 
  winText: "We've destroyed NIMROD!", 
  loseText: "To save mankind, NIMROD must destroy mutantkind!"},

  {name: "WHITEQUEEN", 
  image: "../images/whitequeen.jpg", 
  winText: "You helped us defeat the WHITE QUEEN!", 
  loseText: "You poor, dear, X-Men. Thinking you could beat the WHITE QUEEN."},

  {name: "SHADOWKING", 
  image: "../images/shadowking.jpg", 
  winText: "Nice work! We won't be seeing the SHADOW KING again for a long time.", 
  loseText: "X-Men, the SHADOW KING will feast on your terror!"},

  {name: "SABRETOOTH", 
  image: "../images/sabretooth.jpg", 
  winText: "Good job beating SABRETOOTH.", 
  loseText: "SABRETOOTH just gave ya a war, and you lost."}, 
]

//loads up javascript
document.addEventListener("DOMContentLoaded", function() { 

//randomly chooses villain, assigns var
var yourVillain = villains[Math.floor(Math.random() * villains.length)];

//plays music?
var tunes = document.getElementById("myAudio"); 
function playAudio() { 
  tunes.play(); 
} 

//sets remaining tries to 8
var remainingTries = 8;

//sets remainingletters to word length
var remainingLetters = yourVillain.name.length;

//sets guess as empty string
var guess = "";

//sets guesses as empty array
var guesses = [];

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
 answerArray.push ("_");
}

//sets keyup to uppercase guess 
document.onkeyup = function(event){
  guess = event.key.toUpperCase();
  for (var j = 0; j < yourVillain.name.length; j++) {
    if (yourVillain.name[j] === guess) {
     answerArray[j] = guess;
     oneUp()
     document.getElementById("progress").innerHTML = ("" + answerArray);
     } 
    }
    guesses.push(guess);
    document.getElementById("progress").innerHTML = ("" + answerArray);
    document.getElementById("wrong").innerHTML = ("Already used:" + [guesses]);
    oneDown();
    console.log(remainingLetters);
;

//resets
function reset() {
    clear()
    var yourVillain = villains[Math.floor(Math.random() * villains.length)];
    var tunes = document.getElementById("myAudio"); 
    function playAudio() { 
      tunes.play(); 
    }   
    remainingTries = 8;
    remainingLetters = yourVillain.length;
  }

//win condition- incomplete
  if (remainingLetters < 1) {
    document.getElementById("message").innerHTML = yourVillain.winText;
    yourVillain.image = document.getElementById("image").src;
    reset();
  }

  //lose condition- incomplete
  if (remainingTries < 1) {
    document.getElementById("message").innerHTML = yourVillain.loseText;
    yourVillain.image = document.getElementById("image").src;
    reset();
  }

  console.log(yourVillain.name);
  console.log(answerArray);
  console.log(remainingLetters);
  console.log(remainingTries)
  console.log(yourVillain.winText)


}});

//conditional for win/loss
//lose screen with photo, lose text
//win screen with photo, win text
//get music to work