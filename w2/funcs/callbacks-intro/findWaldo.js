// Exercise 1 - Callback Arguments
// The second argument/parameter is expected to be a function
function findWaldo(names, found) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] == "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// Exercise 2 - Array forEach
// The second argument/parameter is expected to be a function
function findWaldo(names, found) {
  names.forEach(function(item, index, _names){
    if (item == "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);