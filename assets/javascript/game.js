
//layout

var randomVillain = Math.floor( Math.random() * 16);
var villains = [
  {
name: "Apocalypse", 
image: "../images/",
winText: "It is Apocalypse! Good job X-Men!", loseText:"Apocalypse is upon us and it's too late to stop him!" 
},

  {name: "Sauron", image: "", winText: "", loseText: ""}, 
  {name: "Juggernaut", image: "", winText: "", loseText: ""}, 
  {name: "Mystique", image: "", winText: "", loseText: ""}, 
  {name: "Stryfe", image: "", winText: "", loseText: ""}, 
  {name: "Pyro", image: "", winText: "", loseText: ""}, 
  {name: "Sentinels", image: "", winText: "", loseText: ""}, 
  {name: "Mojo", image: "", winText: "", loseText: ""}, 
  {name: "Sinister", image: "", winText: "", loseText: ""}, 
  {name: "Magneto", image: "", winText: "", loseText: ""}, 
  {name: "Stryker", image: "", winText: "", loseText: ""}, 
  {name: "Nimrod", image: "", winText: "", loseText: ""}, 
  {name: "Mastermind", image: "", winText: "", loseText: ""}, 
  {name: "Shadowking", image: "", winText: "", loseText: ""}, 
  {name: "Sabretooth", image: "", winText: "", loseText: ""}, 
]

var yourVillain = villains[Math.floor(Math.random() * villains.length)];

document.addEventListener("DOMContentLoaded", function() { 
console.log(yourVillain.name)


});

//change yourVillain to underscores
//replace correctly guessed characters with correct letter
//countdown of incorrect guesses
//conditional for win/loss
//lose screen with photo, lose text
//win screen with photo, win text
