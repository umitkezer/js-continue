const firstName = "Jonas";
const job = "teacher";
const birthDay = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthDay) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthDay} year old ${job}!`;
console.log(jonasNew);
// ilk kod satırı gibi boşluklara artılarla ilgilenmek yerine templete lierlars denilen $ işaretini kulanmak daha kolay ve okunaklıdır
// $ işareti kullanılıcak ise bunu ters tırnak işareti `` kullanılmalıdır.

console.log(`Just a regular string....`);
// ters tırnak işareti sadece $ işareti nde kullanılmaz normal bir string yazıldığında da kullanılabilir ancak koda yeni bir değer eklenecekse tek veya çift tıranak işaretikullanılmaladır.

console.log("string with \n\
miltiple \n\
lines");
// \n\ işareti stringlerde her zaman yeni bir string oluşturulmasını anlamına gelir

// bunun yerine js de ters tırnak işareti ile yapabilirsiniz

console.log(`string
multiple
lines`);
