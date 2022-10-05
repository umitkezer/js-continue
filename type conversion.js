//type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 , "1991"
// Number(inputYear) yazdigimiz deger boolean veri tipine denustureulmustur digeri ise hala bir string tir
// console.log(inputYear + 18); // burda inputYear degiskenini bize bir string olarak verecegi icin burda bir top[lama islemi yapilmaz
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); // NaN

console.log(typeof NaN); // number nanIn veri tipine baktigimizda number oldugunu goruruz (gereksiz bir sayi )

console.log(String(23), 23); // burda ilk 23 un string 2. sinin ise degeri dir

// type coercion

console.log("I am " + 23 + "years old"); //I am 23 years old (string)
//'+' isareti burda sayiyi string olmaya zorlar
// + isaretinde bir sayi ile bir string arasinda bir islem yapildiginda sayi bir stringe donusturulecektir
console.log("I am " + "23" + "years old"); //I am 23 years old
//bunu yazmak tamamiyle ayni olacaktir
console.log("I am " + String(23) + "years old"); // I am 23 years old
// type coercion olmasaydi ustteki gibi yazmak zordunda kalacaktik

// type coercion sadece stringlere islem uygulmaz
console.log("23" - "10" - 3); // 10
// '-' operatoru stringleri number a donusturdugunu goruruz bu durumda stringler sayilara donusur.
console.log("23" + "10" + 3); // 23103
// + isaretti burda degerleri yan yana toplar
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
// carpma ve bolme islemlerinde calismasi icin tip donusumu yapmak zorunda dir
