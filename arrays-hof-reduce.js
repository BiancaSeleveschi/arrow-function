let numbers = [1, 2, 3]
let sum = 0;
for (let number of numbers) {
    sum += number
}
console.log(sum)

let sum2 = numbers.reduce(function (previousValue, currentValue) {
    console.log(previousValue, currentValue)
    return previousValue + currentValue
})
console.log(sum2)

console.log(numbers.reduce((previousValue, currentValue) => previousValue + currentValue))

let shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 500,
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 10,
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20,
    },
];

console.log(shoppingCart.reduce((previousValue, currentValue) => previousValue + (currentValue.qty * currentValue.price), 0))

let totalPrice = shoppingCart
    .map(product => product.qty * product.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(totalPrice)


let cart = [{
    name: 'Smartphone',
    qty: 2,
    price: 500,
    freeOfCharge: false
},
    {
        name: 'Tablet',
        qty: 1,
        price: 800,
        freeOfCharge: true
    }
];

let totalPrice2 = cart
    .filter(product => !product.freeOfCharge && product.price < 700)
    .reduce((previousValue, currentValue) => previousValue + (currentValue.qty * currentValue.price), 0);
console.log(totalPrice2);



