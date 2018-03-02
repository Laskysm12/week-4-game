var targetNumber = randomNumberGenerator(1)

function randomNumberGenerator(count) {
    var targetArray = [];
    for (var j = 0; j < count; j++) {
        var random = Math.floor(Math.random() * 10) + 70;
        targetArray.push(random)
    }
    return targetArray;
}

$("#number-to-guess").text(targetNumber);


// Creating variables to hold the number of wins, losses, and the user score count
var counter = 0;
var wins = 0;
var losses = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
// Called the random number array by setting it equal to the variable numberOptions (and closing the array with ())
var numberOptions = generateRandomNumberArray(4)

// Write a function that generates an array with 4 random values - then every time you have a new game
// Will need to make a new function similar to generateRandomArray for the target number!!! 

function generateRandomNumberArray(count) {
    var array = [];
    for (var i = 0; i < count; i++) {
        var rand = Math.floor(Math.random() * 10) + 1;
        array.push(rand)
    }
    return array;
}



var crystals = $(".js-crystals");
// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  var imageCrystal = $("<img>");

  imageCrystal.addClass("crystal-image");

  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  crystals.append(imageCrystal);
}

  // This time, our click event applies to every single crystal on the page. Not just one.
  $('body').on("click", ".crystal-image", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  // Adding the crystalValue to the user's counter.
  // Every click, from every crystal adds to this counter.
  counter += crystalValue;

  $(".js-score").text(counter);

  
  // Here is the game logic

  if (counter === targetNumber) {
    wins++;
  }

  else if (counter >= targetNumber) {
    losses++;
  }

  $(".js-wins").text(wins);
  $(".js-losses").text(losses);

});
