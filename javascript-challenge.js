/*
1) Create a function that receives an array of positive integers and returns an array with only the input’s
pair numbers.

For example:
[INPUT] array = [1 2 3 4];
[OUTPUT] array = [2, 4];

*/

const pairNumbers = (arr) => {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pairs.push(arr[i]);
    }
  }
  return pairs;
};
/*
console.log(
  pairNumbers([
    1, 2243, 2991, 3360, 4332, 5714, 9721, 4724, 1398, 4008, 3101, 7430, 9144,
    7697, 9281, 4719, 2293, 467, 6341, 1955, 9227, 8690, 3913, 8567, 620, 2458,
    4631, 3855, 6758, 4361, 8985, 9839, 2220, 7677, 1546, 5588, 1994, 4756,
    6118, 3944,
  ])
);
 */
/*
2) Create a function that receives a String as parameter and returns a Boolean value indicating if the
word is a palindrome* or not.
*/

const palindromeChecker = (str) => {
  str = str.replace(/ /g, '').toLowerCase();
  let last = str.length - 1;
  let first = 0;
  while (first <= last) {
    if (str[first] != str[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
};

// console.log(palindromeChecker('Oozy rat in a sanitary zoo'));

/*
  3) Using any JavaScript object creation pattern, create a Car object with the following attributes and
methods:
** Attributes
* String: make * String: model * boolean: turnedOn * int: engineDisplacement (cylinder volume)
* int: year

** Methods:
* boolean: isOn() * void: turnOn() * void: turnOff() * String: toString() [returns year, make, model and
the engine displacement (cc)] * String: getMarketingData() [returns make, model and year]

*/

function Car(make, model, engineDisplacement, year) {
  this.make = make;
  this.model = model;
  this.turnedOn = false;
  this.engineDisplacement = engineDisplacement;
  this.year = year;

  this.isOn = function () {
    return this.turnedOn;
  };

  this.turnOn = function () {
    this.turnedOn = true;
  };

  this.turnOff = function () {
    this.turnedOn = false;
  };

  this.toString = function () {
    return `Year: ${this.year}. Make: ${this.make}. Model: ${this.model}. EngineDisplacement: ${this.engineDisplacement}`;
  };

  this.getMarketingData = function () {
    return `Year: ${this.year}. Make: ${this.make}. Model: ${this.model}.`;
  };
}

const myCar = new Car('Ford', 'Fiesta', 2000, 2021);

/*
4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes and no
methods. Instantiate it and print to the console its internal state calling the getMarketingData method
from the Car object.

*/
function Bicycle(make, model, year) {
  Car.call(this);
  this.make = make;
  this.model = model;
  this.year = year;
}

const bike = new Bicycle('Cannondale', 'Trail', 2020);

console.log(bike.getMarketingData());
