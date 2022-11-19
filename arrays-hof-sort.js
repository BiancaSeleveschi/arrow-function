let numbers = [0, 1, 2, 3, 10, 20, 30]
numbers.sort()
console.log(numbers)

numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})
console.log(numbers)

numbers.sort((a, b) => a - b)
numbers.sort((a, b) => b - a)
console.log(numbers)

let animals = ['Cat', 'dog', 'Elephant', 'bee']
console.log(animals.sort((a, b) => {
    let x = a.toLowerCase()
    let y = b.toLowerCase()
    return x == y ? 0 : x > y ? 1 : -1
}))

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];


//forEach
let ranks = ['A', 'B', 'C'];
for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}

ranks.forEach(rank => console.log(rank))