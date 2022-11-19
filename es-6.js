//default parameters
function say (message="hi"){
    console.log(message)
}

say()
say(undefined)
say("hello")

let taxRate = () => 0.1;
function computeFinalPrice (price, tax = price * taxRate()){
    return price*tax
}
console.log(computeFinalPrice(20))

//rest params
function sum (...args){
    let total = 0
    for (let a of args){
        total+=a
    }
    return total
}
console.log(sum(1,2,3,4,5))

//spread operator
const odd = [1,3,5]
const combined = [...odd, 2, 4, 6]
console.log(combined)

let rivers = ['Dunare', 'Somes']
let moreRivers = ['sdaf','sads']
rivers.push(...moreRivers)
console.log(rivers)

let allRivers = [...rivers, ...moreRivers]
console.log(allRivers)

//object destructuring
let person = {
    firstName: 'John',
    lastName: 'Doe'
}

// let firstName = person.firstName
let {firstName: fname, lastName: lname} = person

console.log(fname)

//let firstName
//let lastName
//let {firstName, lastName} = person

// ({firstName, lastName} = person)
//
// console.log(firstName)
// console.log(lastName)

// let {firstName, lastName, currentAge = 18} = person
// console.log(lastName)
// console.log(currentAge)

let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

let {name: {firstName, lastName}, name} = employee
console.log(firstName)
console.log(name)

let display = (person) => console.log(person.firstName)
display(person)

let display2 = ({firstName, lastName }) => console.log(firstName + " " + lastName)
display2(person)


function getScores(){
    return [70,80,90,100]
}
let scores = getScores()
//let x = scores[0]

let [x,y,z,w] = getScores()
console.log(x, y, z, w)

let [a, b, ...args] = getScores()

console.log(a,b,args)


function getProfile(){
    return [
        'John',
        'Doe',
        ['Red', 'Green']
    ]
}

let [ffName, llName, [color1, color2]] = getProfile()
console.log(ffName)
console.log(color1)

function stat(a,b){
    return [
        a+b,
        (a+b)/2,
        a-b
    ]
}

let [summ, average, diff] = stat (20,10)
console.log(average)

//template literals
let str = `template literal
asdfasdfsfsf`
console.log(str)
let str2 = 'multiline \n\ string'
console.log(str2)

let fN = 'John'
let lN = 'Doe'
let greeting = `Hi ${fN}, ${lN}`;
console.log(greeting)

let price = 2.56
let tax = 0.1
let finalPrice = `Final price: $${(price * (1+tax)).toFixed(2)}`
console.log(finalPrice)