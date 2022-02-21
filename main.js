// 'const' is like 'var' but it's value can not be changed
const myAge = 23;

// Value saved to this variable will change, so using 'let'
let earlyYears = 2;

earlyYears *= 10.5;

// First two years are accounted for, so taking 'myAge' and subtracting 2
let laterYears = myAge - 2;

// Calculating the number of dog years accounted for by my later years
laterYears *= 4;

// Checking my work
console.log(earlyYears);
console.log(laterYears);

// To figure out my age in dog years, I made a variable with that name and added my 'earlyYears' and 'laterYears' together
myAgeinDogYears = earlyYears + laterYears; 

// This is my name as a string and I'm using '.toLowercase()' to force the result in all lowercase letters
myName = 'Nancy Vergara'.toLowerCase(); 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);
