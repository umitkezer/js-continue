const age = 15;

if (age >= 18) {
  console.log("Sarah can star driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wair another ${yearsLeft} years `);
}

// if else ifadelerinde if de verilen koşul sağlanıyorsa consola yazılan çıktı alınır ama sağmıyorsa else bloğu çalışır

const birthDay = 1991;

let century;
if (birthDay <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
