const names = process.argv.slice(2);

// function printName(name){
//   console.log("My name is " + name);
// }

let printName = (name) => {
  console.log("My name is " + name);
}

printName(names[0]);