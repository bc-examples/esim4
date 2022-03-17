const myMath=require('./myMath.js');

let test=myMath.calcSum(34,64);
console.log("Summa = "+test);

let res=myMath.factorial(5);
console.log("5:n kertoma = "+res);

console.log("4 yli 3 = "+myMath.binom(4,3));