let numbers = [1,2,3,4,5]
console.log(numbers.find(number => number % 2 === 0))

let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];

//filtre si gasesc customerrii care au credit mai mare decat 100
console.log(customers.find(customer => customer.credit > 100))
console.log(customers.every(customer => customer.credit > 50))
console.log(customers.some(customer => customer.credit > 200))

