// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice. The following is a sample output of the program.

// node diceRoller.js 4
// Rolled 4 dice: 4, 4, 4, 4

var num = process.argv.slice(2);
num = Number(num);

function rollDice(num) {
  // make the dice roll this "num" of times.
  // return the outcomes.
  var diceOutcomes = "";
  for (var i = 0; i < num; i++) {
    var outcomeOfEachDice = "";
    outcomeOfEachDice = Math.floor((Math.random() * 6) + 1);
    diceOutcomes += outcomeOfEachDice + ", ";
  }
  var lastComma = diceOutcomes.lastIndexOf(", ");
  diceOutcomes = diceOutcomes.slice(0, lastComma);

  return diceOutcomes;
}

console.log("Rolled " + num + " dice: " + rollDice(num));