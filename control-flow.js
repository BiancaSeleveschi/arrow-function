//do while
let count = 0;
do {
    console.log(count)
    count++;
} while (count < 5)


// let max = 11;
// let min = 1;
// let secretNumber = Math.floor(Math.random() * (max - min) + min);
// let number = 0
// let hint = ''
// let count = 0;
// do {
//     const input = prompt("Please enter a number "+hint);
//     number = parseInt(input)
//     count++
//     if (number > secretNumber) {
//         hint = "Numarul introdus e prea mare"
//     }
//     else if (number < secretNumber) {
//         hint = "Numarul introdus e prea mic"
//     }
//     else {
//         alert('ai castigat din' + count)
//     }
// } while (number != secretNumber)


let person = {
    name: 'John',
    age: 25
}

//in

for (const prop in person) {
    console.log(prop + ':' + person[prop])
}


const items = [10, 20, 30]


let total = 0
for (let item in items) {
    total += items[item]
}
console.log(total)


let scores = [10, 20, 30]
scores.message = 'Hi'
for (let score in scores) {
    console.log(scores[score])
}


//of
for (let score of scores) {
    console.log(score)
}


for (let item of items) {
    total += item
}
console.log(total)

const ratings = [
    {user: 'John', score: 3},
    {user: 'Mary', score: 5},
]

let sum = 0;
for (let rating of ratings) {
    sum += rating.score
}
console.log(sum)

let str = 'abc'

let counter = 0;
for (let c of str) {
    if (c === 'a') {
        counter++;
    }
}
console.log(counter)


//continue
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i)
}

//calculeaza suma numerele dintr-un array pana dai de primul numar egal cu 0
let arr = [1, 2, 3, 4, 0, 4, 6]
let sum2 = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        break;
    }
    sum2 += arr[i];
}
console.log(sum2)

//gaseste indexul la care apare prima data un numar n intr-un array dat
function getFirstIndex() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 4) {
            continue;
        }
        return i;
    }
}

console.log(getFirstIndex())

