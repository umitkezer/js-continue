const age = 23;
// age >= 18
//   ? console.log("I like drink wine")
//   : console.log("I like drink water");

// age >= 18 ? "wine" : "water";
// operatorler bir expression dur
// bir operator her zaman bir deger uretir
// bir degeriniz varsa bunu bir degiskene atayabilirsiniz

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// bunu bir if else statements te yazarsak

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
// template literals in icene sadece expression ifadeler koyulur
