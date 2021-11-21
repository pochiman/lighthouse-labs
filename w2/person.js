class Person {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {

      return this.firstName + " " + this.lastName;

  }

  displayAge() {

      return this.age;

  }

}

var myPerson = new Person("John", "Smith", 24)
console.log(myPerson.fullName());
console.log(myPerson.displayAge());