let n = "1" + 1; // '11'
n = n - 1; // 11 - 1
console.log(n); // 10
// satir 1 de string olan 1 ile number olan 1'i 2 sini de string olarak gorup yan yana toplar

console.log(2 + 3 + 4 + "5"); // '95'
// + isaretinde stringin geldigi yere kadar normal toplama islemi yani 2 + 3 + 4 + 9
// olusan:  9 + '5' burda string ile sayinin toplami isteniyor
// + operatorunde string ile sayini toplami yan yana toplanarak yapilir idi.

console.log("10" - "4" - "3" - 2 + "5"); //'15'
// "10" - "4" - "3" - 2  burda normal islemler yapilir
// olusan: 1 + '5' string ile + operatoru oldugu icin '15' olur
