// data types = veri tipleri

// number:
// ondalık ve tamsayılar için kullanılır. diğer dillerde bunlar için  farklı veri türleri olsa da js de bir arada kullanılmıştır.

let age = 23;

// String;
// sadece metin için kullanılırlar
// her zaman tırnak için de kullanılır aksi durumlarda değişkenler ile kartırılabilir

const firtsName = "jonas";

// Boolean;
// yanlızca true veya false mantıksal değerlerinden birini alabilen mantıksal bir türdür.
// daha sonra göreceğimiz bit kod ile karar almak if.çin Boolean değerlerini kullanırız.

let fullAge = true;

// undefined:
// ilk olarak henüz tanımlanmamış bir değişkenin aldığı bir değerdir
// yani temel olarak undefined ın boş değer anlamını taşır

// const cildren

/*
null 
undefined ile benzerdir
undefined ile farkı kullanım bakımından farklı yerlerde kullanılmasıdır. 
*/

/*
Symbol(es2015);
benzersiz olan ve değiştirilemeyen değer için kullanılır
şimdilik kulanışlı değil 
*/

/*
BıgInt(ES2020):
Sayı türünün tutabileceğinden daha büyük tam sayılar da kullanılır.
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(null);
