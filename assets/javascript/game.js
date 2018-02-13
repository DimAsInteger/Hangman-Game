// variables:
var wordArray = ["flynn", "kibble","hairy", "toy", "trainer", "sleepy", "eating"];
var word="";
var answerArray = [];
var discardArray = [];

  //initialize dash grid specific to each element of the array:
  function initialize(){
      word = wordArray[Math.floor(Math.random() * wordArray.length)];
      answerArray = [];
          for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
          }
      document.getElementById("answer").innerHTML= answerArray.join(" ");
      document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
  }
initialize();

  function guessTime() {
    // prompt user for guess
    var guess = document.getElementById("guess").value;
    var output = "";

    if (guess.length !== 1) {
      output = "Please enter only a single letter";
    } else {
        var i=0;
        //add to the array
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                output = "Yeah, yeah " + "'"+guess+"'" + " is in there.";
            }
        }

        // Update the game for remaining unknowns
        var remaining_letters = answerArray.length;

        // letters remaining
        for (i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

            // all letters guessed
            if (remaining_letters == 0) {
                  output = "You win, Sark. I'm going to have to put you on the game grid.";
            }

            // incorrect guesses
            if (output === "") {
                  output = "There's no " + "'"+guess+".'" + " Yet another failure, Sark. You're a discrace to the game.";
                  discardArray.push(guess);
            }

            if (discardArray.length > 7) {
                  output= "Muhahahahahah!  You're finished!  No more guesses for you!  Game over!";
                  }

        document.getElementById("myFailures").innerHTML = discardArray.join(" ");

        // update info
        document.getElementById("answer").innerHTML = answerArray.join(" ");

        // clear previous guess
        document.getElementById("guess").value = "";
  }
  //message assignment
  document.getElementById("message").innerHTML = output;
}

function hint() {
    document.getElementById("message").innerHTML = "Just put something in the box, Sark. I'd rather be derezzed!";
}

function quit() {
    document.getElementById("message").innerHTML = "The word was " + word;
      for (var x = 0; x < word.length; x++) {
          answerArray[x] = word[x];
      }
    // solution
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
