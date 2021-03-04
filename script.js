'use strict';

/* 
 4 Fundementals of OOP - Object Oriented Programming



1 - Abstraction -  ignore and hide details that dont matter., allowing us to get an
an overwiev of the things we are implementing instead of messing with details 
|
|
2-Encapsulation -  Keeeping properties and methods private in the class, and tehy 
not accesiible from outside the class. Some methods can exposed as public interface API 
( prevents external code from accidentally manipulating internal properties/state)
(allows to change internal impelementation without the rsik of breaking th external code)
|
|
|
3 - Inheritance - Makign all properties and methods of certain class available to a child class
,forming a hierarchical relationship between classes. This allows us to reuse common logic
and to model real world relationship
|
|
|
4 - Polymorphism - A child class can overwrite a method it inherited from a parent class


OOP IN JAVASCRIPT : PROTOTYPES

Classes -> Objects(Instances) also called instantiated
|
| 
Objects ---> Prototypes - Prototypal inheritance - the prototype contains methods( behaviour)
that accesible to all objects linked to that prototype.

How do we create prototypes? And How do we link objects to prototype?How can we creaet objects, without having classes?

1 . Constructior function  : * Technique to create objects form functions 
                            * This how built -in objects like Arrays, Maps or Sets are actually impelemented

2. ES6 classes -  *ES6 classs do NOt behave like classes in 'classical OOP '
                * 'Syntatic sugar' behind the scenes , ES6 classes work exactly like constructor function 


3.Object.create -  * The easiest and most straight forward way of linking and object to a prototype object is to

*/
/* 
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create method inside
  // this.calcAge= function () {
  //     console.log(2037 - this.birthYear);
  // }
};

//new -  calls the constructior function

const jonas = new Person('Jonas', 1986);
console.log(jonas);

// Steops behind
//1.New{} object  is created
//2. function is called, 'this' points to object
//3. Objects linked to prototype
//4. function automatically returns object {}

const kris = new Person('Kris', 1965);
const jack = new Person('Jack', 1976);

console.log(kris, jack);

console.log(jonas instanceof Person); // returns true or false

//
//
//_______ USING PROTOTYPES _________

// all the functions have properties

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
kris.calcAge();

console.log(Person.prototype.isPrototypeOf(jonas)); // check if jonas is prototype of Person object

Person.prototype.species = 'Homo sapiens'; // adding new property
console.log(kris, jonas); // they both get access to species but they dont own it

console.log(jonas.hasOwnProperty('firstName')); // to check if he owns the property  logs true

//
//
//|
//__________________PROTOTYPAL INHERITANCE ON BUILD ON PROJECTS____

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

const arr = [3, 5, 6, 7, 8, 3, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // logs true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  // u can add new method to array prototype
  return [...new Set(this)];
};

console.log(arr.unique());

//selecting dom eleemnts

const h1 = document.querySelector('h1');
console.dir(h1);
 */

//__________________CHALLANGE #1

/* 1. Use a constructor function to implementa'Car'.A car has a'make'and a  'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implement an'accelerate' method that will increase the car'sspeedby10, and log the new speed to the console
3. Implementa'brake'method that will decrease thecar's speedby5,andl og the new speed to the console
4. Create2'Car'objects and experiment with calling'accelerate'and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h */
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} goin at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} goin at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
mercedes.break();
mercedes.break();
bmw.break();
console.log(bmw);
 

 */

//
//
//
//
/* ////////////////////////////////  ES6 classes __________________________
// Classes are still functions

//class expression -
//const PersonCl= class {}

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Nethods will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl('Jessica', 1986);
console.log(jessica);
jessica.calcAge();
jessica.greet();
console.log(jessica.age);

//this would be like the one function above
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.Name}`);
// };

//1. Classes are NOT hoisted   .. can not use before
// 2. Class are firs-class citizens  , pass them in functions and return functions
// 3. Classes are executed in strict mode

//
//
//
//
//////////////////////////////// SETTTERS AND GETTERS  __________________________

// setters set value and getters get value

const account = {
  owner: 'Jonas',
  movements: [200, 530, 340, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// We can change new property names

class Dog {
  constructor(race, age) {
    this.race = race;
    this.age = age;
  }

  set race(name) {
    // if (name.includes(' ')) this.RealName = name;
    // else console.log('dog');
    this._Kris = name;
  }
  // Static Method
  static hey = function () {
    console.log('howdy dogy');
  };
}

const russel = new Dog('Jack Russel', 10);
console.log(russel);

//////////////////////////////// STATIC METHODS  __________________________

// They are not available on instances 

Dog.hey = function () {
  console.log('howdy dog');
};

Dog.hey(); // it can be called only on the main Object , it cant inherit to russel

 */

//
//
//
//
//
//////////////////////////////// OBJECT CREATE  __________________________
/* 
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1986;
steven.calcAge();
console.log(steven);

const kris = Object.create(PersonProto);
kris.init('Kristaps', 1952);
kris.calcAge();
console.log(kris); */

//__________________CHALLANGE #2

/* 1. Re-create Challenge#1,but this time using an ES6class(callit'CarCl')
2. Add a getter called'speedUS'which returns the current speed in mi/h(divide
by 1.6)
3. Add a setter called'speedUS'which sets the current speed in mi/h(but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate'and'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h */

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}; */
/* 
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  break = function () {
    this.speed -= 5;
    console.log(`${this.make} goin at ${this.speed} km/h`);
  };

  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} goin at ${this.speed} km/h`);
  };

  get SpeedUS() {
    return this.speed / 1.6;
  }

  set SpeedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}
const ford = new Car('Ford', 120);
//console.log(ford.SpeedUS);
console.log(ford.SpeedUS);
ford.accelerate();
ford.accelerate();
ford.break();
ford.SpeedUS = 75;
 */
//

//
//
//
///////////////////////////////
//-------------------------------- CLASS INHERITANCE-----

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // The call() allows for a function/method belonging to one
  //object to be assigned and called for a different object.
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};

//LINKING PROTOTYPES
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__); // logs person , but it needs student

// We fix it
Student.prototype.constructor = Student;
console.log(mike);

//__________________________________INHERITANCE CLASSES

class PupilCl extends Student {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); //  always needs to happen firs -this would be the same as in const Person.call(this,)
    this.course = course;
  }
  introduce = function () {
    console.log(`my name is NOT ${this.firstName} and i study ${this.course}`);
  };
}

const kris = new PupilCl('Kris', 1986, 'Ecoonomy');

// it will be also log the same properties from parent .terefore sometimes we dont need them
// If you put function in the child object it will overwrite

console.log(kris);
kris.calcAge(); // this calls because it is the prototype of  Student -> Person
kris.introduce(); // this calls because it is the prototype of Student and as you see we added the same method to PupilCl prototype

//
//
//
///////////////////////////////
//-------------------------------- CLASS INHERITANCE OBJECT.CREATE-----

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`my name is NOT ${this.firstName} and i study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2001, 'Artist');
jay.calcAge();
jay.introduce();
console.log(jay);
console.log(steven);

//----------------------------********************************

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`thanks for opening account, ${owner}`);
  }

  //Public interface methods

  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account('Kris', 'EUR', 1234);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
