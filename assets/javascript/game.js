//array of villains
var villains = [
  {
    name: "APOCALYPSE",
    image: "./assets/images/apocalypse.jpg",
    winText: "We stopped Apocalypse! Good job X-Men!",
    loseText:
      "You have failed, X-Men, and failure equals death! Now you die ... at the hands of APOCALYPSE!"
  },

  {
    name: "SAURON",
    image: "./assets/images/sauron.jpg",
    winText: "Good job defeating SAURON! That dinosaur is history.",
    loseText: "The skies belong to SAURON -- and so do your lives!"
  },

  {
    name: "JUGGERNAUT",
    image: "./assets/images/juggernaut.jpg",
    winText: "Nice job, we stopped the JUGGERNAUT!",
    loseText: "Ha Ha Ha! Nothing stops the JUGGERNAUT!"
  },

  {
    name: "MYSTIQUE",
    image: "./assets/images/mystique.jpg",
    winText: "MYSTIQUE can't hide from the X-Men! Great job!",
    loseText: "It is I, MYSTIQUE! You X-Men are so easily fooled."
  },

  {
    name: "STRYFE",
    image: "./assets/images/stryfe.jpg",
    winText: "Good job defeating STRYFE, X-Men!",
    loseText: "Die, X-Men! Now the world will know to fear STRYFE!"
  },

  {
    name: "SENTINELS",
    image: "./assets/images/sentinels.jpg",
    winText: "We defeated the SENTINELS!",
    loseText: "Mutants destroyed. SENTINELS returning to base."
  },

  {
    name: "MOJO",
    image: "./assets/images/mojo.jpg",
    winText: "MOJO? I didn't realize that guy was still around.",
    loseText: "I won? I won! Bow before MOJO!"
  },

  {
    name: "SINISTER",
    image: "./assets/images/sinister.jpg",
    winText: "That was a close one. We defeated MR. SINISTER!",
    loseText:
      "It takes more than a ragtag band of mutants to defeat MR. SINISTER!"
  },

  {
    name: "MAGNETO",
    image: "./assets/images/magneto.jpg",
    winText: "With your help, we defeated our greatest foe, MAGNETO!",
    loseText:
      "Greetings, X-Men. I bid you welcome to the site of your final battleground. You are going to die here, mutants. And neither your powers nor all your skills can save you from my wrath! Look on me, X-Men for I am your oldest, deadliest foe. Master of the legion of evil mutants -- and soon to be lord of all the world! I -- am -- MAGNETO!!"
  },

  {
    name: "BROOD",
    image: "./assets/images/brood.jpg",
    winText: "It wasn't easy, but we beat the BROOD!",
    loseText: "We are the BROOD, and now, you are too!"
  },

  {
    name: "NIMROD",
    image: "./assets/images/nimrod.jpg",
    winText: "We've destroyed NIMROD!",
    loseText: "To save mankind, NIMROD must destroy mutantkind!"
  },

  {
    name: "WHITEQUEEN",
    image: "./assets/images/whitequeen.jpg",
    winText: "You helped us defeat the WHITE QUEEN!",
    loseText: "You poor, dear, X-Men. Thinking you could beat the WHITE QUEEN."
  },

  {
    name: "SHADOWKING",
    image: "./assets/images/shadowking.jpg",
    winText:
      "Nice work! We won't be seeing the SHADOW KING again for a long time.",
    loseText: "X-Men, the SHADOW KING will feast on your terror!"
  },

  {
    name: "SABRETOOTH",
    image: "./assets/images/sabretooth.jpg",
    winText: "Good job beating SABRETOOTH.",
    loseText: "SABRETOOTH just gave ya a war, and you lost."
  }
];

//loads up javascript
document.addEventListener("DOMContentLoaded", function() {
  //randomly chooses villain, assigns var
  var yourVillain = villains[Math.floor(Math.random() * villains.length)];

  //sets remaining tries to 9
  let remainingTries = 9;

  //sets remainingletters to word length
  let remainingLetters = yourVillain.name.length;

  //sets guess as empty string
  let guess = "";

  //sets guesses as empty array
  let guesses = [];

  //resets game
  var reset = function() {
    answerArray = [];
    var guesses = [];
    var guess = "";
    yourVillain = villains[Math.floor(Math.random() * villains.length)];
    document.getElementById("progress").innerHTML = "" + answerArray;
    for (var i = 0; i < yourVillain.name.length; i++) {
      answerArray.push("_");
    }
    document.getElementById("message").innerHTML = "";
    document.getElementById("image").innerHTML = "";
    console.log("you clicked reset");
    console.log(yourVillain);
  };

  //plays music?
  var tunes = document.getElementById("myAudio");
  function playAudio() {
    tunes.play();
  }

  reset();

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
    answerArray.push("_");
  }

  //add an event listener to start button
  document.getElementById("start").onclick = function(event) {
    // console.log("Hi from onclick event");
    document.getElementById("progress").innerHTML = "" + answerArray;
  };

  document.getElementById("reset").onclick = function(event) {
    reset();
  };

  //sets keyup to uppercase guess
  document.onkeyup = function(event) {
    guess = event.key.toUpperCase();
    for (var j = 0; j < yourVillain.name.length; j++) {
      if (yourVillain.name[j] === guess) {
        answerArray[j] = guess;
        oneUp();
        document.getElementById("progress").innerHTML = "" + answerArray;
      } else oneDown();
      document.getElementById("wrong").innerHTML = "Already used:" + [guesses];
    }
    guesses.push(guess);
    document.getElementById("progress").innerHTML = "" + answerArray;
    // document.getElementById("wrong").innerHTML = "Already used:" + [guesses];
    console.log(remainingLetters);

    //win condition- incomplete
    if (remainingLetters < 1) {
      console.log(yourVillain.image);
      document.getElementById("message").innerHTML = yourVillain.winText;
      document.getElementById("image").innerHTML =
        '<img src="' + yourVillain.image + '">';
      document.getElementById("image").innerHTML =
        '<img src="' + "../../images/sabretooth.jpg" + '">';
    }

    //lose condition- incomplete
    if (remainingTries < 1) {
      console.log(yourVillain.image);
      document.getElementById("message").innerHTML = yourVillain.loseText;
      document.getElementById("image").innerHTML =
        '<img src="' + yourVillain.image + '">';
      reset();
    }

    console.log(yourVillain.name);
    console.log(answerArray);
    console.log(remainingLetters);
    console.log(remainingTries);
    console.log(yourVillain.winText);
  };
});

//win screen with photo, win text
//get music to work
