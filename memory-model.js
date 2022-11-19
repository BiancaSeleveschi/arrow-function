let name = "John";
let age = 25;

let person = {
    name: 'John',
    age: 25
}

person.CNP = '1231432434'

let newAge = age;
newAge = newAge + 1;
console.log(age, newAge)

let member = person
member.age = 26

console.log(person.age)
console.log(member.age)


