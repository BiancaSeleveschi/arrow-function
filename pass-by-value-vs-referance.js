function square(x){
    x = x*x
    return x;
}

let y = 10;
let result = square(y)

console.log(result)
console.log(y)


let person = {
    name: "John",
    age:25
}

function increaseAge(obj){
    obj.age++
}

increaseAge(person)
console.log(person.age)