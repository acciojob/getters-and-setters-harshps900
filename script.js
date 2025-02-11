// Person Class
class Person {
  constructor(name, age) {
    this._name = name; // Private property for name
    this._age = age; // Private property for age
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age; // Setter for age, allows age to be updated
  }

  // Getter for age
  get age() {
    return this._age; // Getter for age
  }
}

// Student Class that inherits from Person
class Student extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent class constructor
  }

  // Method to log that the student is studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher Class that inherits from Person
class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent class constructor
  }

  // Method to log that the teacher is teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
