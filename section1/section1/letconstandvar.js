/*
let ve const ES6 ile tanıtıldı
var değişkenleri bildirmenin eski yoldur */

// let bir değişkene değer atadınkatan sonra değeri tekardan değiştirmemize olanak sağlar.

let age = 30;
age = 31;
console.log(age);

// let değişkenine değer atamadan ve daha sonra bu değişknene değer atayabilmemizi sağlar.
let year;
year = 1991;

console.log(year);

// const ile değişkene değer atadıktan sonra tekarar değiştirilemez

const birthYear = 1990;
// birthYear = 1991; // hata

// constta değişkene boş değer atanmaz.

// const jab;

// var ile let birbirine benzerdir ama temeldew farklılıklar gösterir.

var job = "programmer";
job = "teacher";

console.log(job);
