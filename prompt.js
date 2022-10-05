// BIR WEB SAYFASINDAN KULLANICADAN BILGI ALMAK ICIN prompt KULLANILR

//prompt("What's your favourite number?");
// kullanicadan aldimiz bilgiyi saklayabilmemiz icin bir degisken atamak zorundayiz :

// const favourite = prompt("What's your favourite number?");
// console.log(favourite); // '23' pop up ta yazdigimiz deger
// console.log(typeof favourite); // "string"

// if (favourite == 23) {
//   // '23' == 23 tip donusumu yapar
//   console.log("Cool! 23 is an amazing number!");
// }

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); // 23 artik bir string degil number
console.log(typeof favourite); // number

if (favourite === 23) {
  // 23 === 23            22 === 23 -> false
  // '23' stringi numbera donusemedigi icin cikti alamayiz yazdirabilmemiz icin number a donusturmemiz  gerekir
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is a lso a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// else if blogu if blogu kosulu saglamazsa else if blogu kosulu sagliyorsa onu consola yazdirir istinildigi kadar else if blogu eklenebilir
// if blogu kosulu saglamiyorsa else devreye girmeden once bakilir

if (favourite !== 23) console.log("Why not 23?");
// kosul eger 23 ten fakli bir deger ise işe yarar 23 ün olmadıgı her sayıda bu mesajı alırız
