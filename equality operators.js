//const age = 18;
// if (age === 18) console.log("You just became an adult");
console.log(18 === 18); // true
console.log(18 === 19); // false
console.log("18" == 18); // treu
//  '18' stringini number a type coercin (tip zorlamasi) yapar ve boylece biribirine denk cikar
console.log("18" === 18); // false
// 3' lu esirlik oldugu icin tip zorlamsi yapmaz 3lu esitlik te tamamiyle birbiri ile ayni olmasi gerektigi icin false olur.

const age = 18;
if (age === 18) console.log("You just became an adult(strict)");
if (age == 18) console.log("You just became an adult(loose)");

// burda her iki operatör de calisir cunku 18 burda bir number dir 3lu esitlikte tip donusturmesi yapmak zorunda kalmaz
// eger const age = '18' gibi 18 i string yaparsak 3lu esitlikte tip donusumu yapamiycagi icin sadece 2li esitlik calisir

// elinden geldigi surece 2 li esitlikten kacin
// esirlik yapmadan once tip donusturmesini yapmak daha verimli olacaktir
