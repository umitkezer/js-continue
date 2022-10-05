// Math operators

const ageJonas1 = 2037 - 1991;
const ageSarah1 = 2037 - 2018;
console.log(ageJonas1, ageSarah1); // console.log da virgül birden fazla değişkeni consola yazdırılabilir .

// 2037 burda ortak değişken olduğu için buna bir değişken atayıp da yazabiliriz.
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3  2 üzeri 3 demektir.Yani 2*2*2

const firstName = "Jonas";
const lastName = "schmedtman";
// console.log(firsName + " " + lastName);
// konsolunm içine yazdığımız tırnaklar içerisinde ki boşluk string ler arasında boşluluğu kooymak için kullanılır.

// Assigmenet (atama) aperators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101         verilen x değişkenine 1 eklemek için kullanırlır
x--; // x = x - 1 = 100         verilen x değişklenine X++ nın tamtersi olarak 1 çıkarmak için kullanılır.
x--; // x = X - 1 = 99
console.log(x);

//Comparison (karsilastirma )operators
// boolean değerleri üretmek için kullanılır.
console.log(ageJonas > ageSarah); // > işaret yerine <,<=,>= da kullanbiliriz
console.log(ageSarah >= 18); // burda Sarahın yaşının 18 den büyük veya eşitmi diye kontrol edlipi boolean olarak karşılığını konsola yazdıracaktır.

console.log(now - 1991 > now - 2018); // aslında bu satır 33 deki kodun bir benzeridir.
