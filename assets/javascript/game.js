var targetNumber = 53;

$("#number-to-guess").text(targetNumber);


var counter = 0;

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
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});
