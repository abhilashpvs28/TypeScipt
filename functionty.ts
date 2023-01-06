/* Function in Typescript
define a normal function
define function type
add params in function
define params type
Optional Params With type
*/

// function calc():string{
//     return "Hello EveryOne"
// }

// console.log(calc())

// giving a value through a function

function glass(a:string ,b :number|string):number|string {
    return a+b ;
}

console.log(`His Name is ${glass("harish ","asd")}`);