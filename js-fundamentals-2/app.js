'use strict';

// FUNCTIONS
/** function func() {
  console.log("I'm Full-Stack Software Developer");
}

func();
func();
func();

function myCars(bmw, mers) {
  const garage = `I have ${bmw} BMW and ${mers} Mersedes-Benz`;
  return garage;
}

const newCars = myCars(3, 4);
console.log(newCars); */

// FUNCTION DECLARATIONS vs. EXPERSSIONS

// Function declarations
/** function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(2001);
console.log(age1);

// Function experssions
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(2002);
console.log(age2); */

// ARROW FUNCTIONS
/** const myAge = birthYear => {
  return 2021 - birthYear;
};

const age = myAge(2001);
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 28 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(2001, 'Komil'));
console.log(yearsUntilRetirement(2002, 'Iroda')); */

// FUNCTIONS CALLING OTHER FUNCTIONS
/** const cutFruitPieces = fruit => {
  return fruit * 4;
};

const fruitProcessor = (apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
};

console.log(fruitProcessor(4, 5)); */

// REVIEWING FUNCTIONS
/** const calcAge = birthYear => {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2001, 'Komil'));
console.log(yearsUntilRetirement(1970, 'Iroda')); */
