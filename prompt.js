// BIR WEB SAYFASINDAN KULLANICADAN BILGI ALMAK ICIN prompt KULLANILR

//prompt("What's your favourite number?");
// kullanicadan aldimiz bilgiyi saklayabilmemiz icin bir degisken atamak zorundayiz :

const favourite = Number(prompt("What's your favourite number?")); // 3lu esitlikte ciktiyi alabilmemiz icin degeri number a donusturuyoruz
console.log(favourite); // '23'
console.log(typeof favourite); // "string"

/*if (favourite == 23) {
  // '23' == 23 tip donusumu yapar
  console.log("Cool! 23 is an amazing number!");
} */

if (favourite === 23) {
  // 23 === 23
  // '23' stringi numbera donusemedigi icin cikti alamayiz yazdirabilmemiz icin sayiya donusturmemiz gerekir
  console.log("Cool! 23 is an amazing number!");
}
