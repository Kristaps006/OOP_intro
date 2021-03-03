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
