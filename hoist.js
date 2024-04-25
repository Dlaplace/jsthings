console.log('*****hoist *********')
console.log(suma)
// console.log(arrow)
console.log({a})
// console.log({b})
// console.log({c})


console.log("suma es ", suma(2,2))
console.log("suma es ", arrow(3,3))

const arrow = (a,b) => a+b
// var arrow = (a,b) => a+b

function suma(a,b){
    return a+b
}


var a = "this is var"
const b= "this is const"
let c = "this is let"

console.log({a},{b},{c})