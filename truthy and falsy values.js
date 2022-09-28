console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true

// const money = 0;
// if (money) {
//   console.log("Don't spend 't all");
// } else {
//   console.log("You should get a job");
// }
// burdaki money degiskeninin 0 oldugunu ve sifirin da yanlis oldugunu biliyoruz o yzuden else blogu calisir

const money = 100;
if (money) {
  console.log("Don't spend 't all");
} else {
  console.log("You should get a job");
}
// 100 true bir deger oldugundan if blogu calisir

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
//
