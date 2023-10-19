let a = +prompt("write a number !")
while (isNaN(a) || a == 0 || a < 0) {
    a = +prompt("this is not the thing that we are expecting for")
}
let b = +prompt("write a degree of a number")
while (isNaN(b) || b == 0 || b < 0) {
    b = +prompt("that is not the thing that we are looking for " + " pl enter the number")
}
// console.log( a ** b); 
// for (let i = 0; i < b; i++) {
//     console.log(a*b);

// }
// var result = 1
// let box = a
let result = a
for (let i = 1; i < b; i++) {
     result = result * a

}
console.log(result);