class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (!(obj instanceof Object)) {
      throw new TypeError("The argument is not a object");
    } else if (!obj.name && !obj.age) {
      throw new TypeError("The object must contain at least a name or an age property");
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch {
      return false;
    }
  }

  static greetAll(array) {
    return array.map((person) => person.sayHello());
  }
}

/*
let coolPerson = new Person("mai", 32); // Person { name: 'mai', age: 32 }

  coolPerson.update({ name: "lulu", age: 57 });
  console.log(coolPerson); // Person { name: 'lulu', age: 57 }
*/

module.exports = Person;
