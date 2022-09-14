/*
Mark and john are trying  to comprare their BMI(Body Mass Index)
mark vw jhon  vücut kitle endexlerine karşılatrımaya çalışıyorlar
which is calculated using the farmula;
BMI = mass / height ** 2 = mass / (height * height)
(mass in kg and height in meter)

1.Store Mark's and Jhon's mass and height in veriables.
2.Calcute both their BMI's using the farmula (you can even implement both versions)
3.Create a boolean veriable 'markHigherBMI' containing informatin about whether mark has a higher BMI than Jhon.


TEST DATA 1:Marks weights 78 kg and is 1.69 m tall.
Jhon weights 92 kg and is 1.95 m tall
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
Jhon weights 85 kg and is 1.76 m tall


*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJhon = 92;
// const heightJhon = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

console.log(massMark / heightMark ** 2);
console.log(massMark / (heightMark * heightMark));
console.log(massJhon / heightJhon ** 2);
console.log(massJhon / (heightJhon * heightJhon));

const markHigherBMI = massMark / heightMark ** 2;
const jhonHigherBMI = massJhon / massJhon ** 2;

console.log(markHigherBMI > jhonHigherBMI);

// const BMIMark = massMark / heightMark ** 2;
// const BMIJhon = massJhon / (heightJhon * heightJhon);
// const markHigherBMI = BMIMark > BMIJhon;

// console.log(BMIMark, BMIJhon, markHigherBMI);
