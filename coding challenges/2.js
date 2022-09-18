/* 
use the BMI example from Challenge #1, and the code you already wrote, and .mprove it : 


1. Print a nice outpot to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement

*/

const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJhon = 85;
// const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);
console.log(BMIMark, BMIJhon);

if (BMIMark > BMIJhon) {
  console.log(`Mark is BMI (${BMIMark}) is higher than Jhon's (${BMIJhon})!`);
} else {
  console.log(`Jhon's BMI (${BMIJhon}) is higher than Mark's (${BMIMark})!`);
}

// tamplate literals istediği için burda ters tırnaklar kullanmamaız gerekir ve BMI jhon ve BMI mark ın değerlerini parantez içinde belirteceğimizi istediği için parantez içinde $ve curly parantez kullanırız burda asıl önemli olan ters tırnak işaratlerini kullanmak.
