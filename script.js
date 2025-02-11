class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;  // Directly public access
  }

  // Getter for age
  getAge() {
    return this.age;
  }

  // Setter for age
  setAge(value) {
    if (value >= 0) {
      this.age = value;
    } else {
      console.log("Age cannot be negative.");
    }
  }

  getName() {
    return this.name;
  }
}

const person = new Person("John", 25);
console.log(person.age); // 25 (direct access)
person.age = 30;         // Directly set age
console.log(person.age); // 30
