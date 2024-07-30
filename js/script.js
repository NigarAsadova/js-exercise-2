// // 1. 2 ədədin fərqini hesablayan function yazın,əgər 1-ci rəqəm ikincidən böyükdürsə.
// const calcSubt = (a, b) =>{
//     if(a > b) return a - b;
// }
// const n = Number(prompt("Enter first number :"));
// const m = Number(prompt("Enter second number : "));
// // const n = 12;
// // const m = 6;
// console.log(calcSubt(n,  m)); // output = 6

// //   2. Əgər ədəd cüt ədəddirsə,onun kök altı dəyərini hesablayan function yazın
// const b = prompt("Please enter a number for which you want to know the square root."); // input = 64
// function calcSqrt(a){
//     if(a % 2 == 0) return Math.sqrt(a);
// }
// console.log(calcSqrt(b));  // output = 8

// // // 3. Ekrandan daxil edilən(promp) data-nın cüt olub olmadığını yoxlayan metod yazın.

// const c = Number(prompt("Test a number")); // input = 13
// const isEven = c => (c % 2 == 0) ? "YES" : "NO";
// console.log(isEven(c)); // output = NO

// // // 4. Ekrandan daxil edən rəqəmin tipinin Nan olub olmadığını yoxlayan method yazın
// const c = prompt("Test a number"); // input = 12
// const isNumber = c => isNaN(c) ? "YES" : "NO";
// console.log(isNumber(c)); // output = NO