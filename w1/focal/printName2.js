const names = process.argv.slice(2);

let firstName = returnTheFirstName(names);
printName(firstName);

function returnTheFirstName(names) {
  return names[0];
}

function printName(name) {
  console.log("My name is " + name);
}