/* const raisinAlarm = function(arr) {
  let result = "All good!";
  for (let ing of arr) {
    if (ing == "🍇") {
      result = "Raisin Alert!";
    }
  }
  return result;
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); */

const raisinAlarmArray = function(arr) {
  let result = [];
  for (let ing of arr) {
    // console.log("ing = " + ing);
    if (ing.includes("🍇")) {
      result.push("Raisin alert!");
    } else {
      result.push("All good!");
    }
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));