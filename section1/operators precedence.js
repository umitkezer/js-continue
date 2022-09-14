const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// burda önce eksinin sonra büyüktür işaretinin çalışmasının nedeni operatörler arasında bir çalışma öceliği olmasıdır. toplayu msn operattor precedence sayfasında toblunun aldıonda göre bilirsin

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; // parantez koymanın amaca yinre işlem önceliğinden gelir.
// averageAge = ortalama yaş
console.log(ageJonas, ageSarah, averageAge);
