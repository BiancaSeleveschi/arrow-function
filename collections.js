//set

let chars = new Set(['a', 'b'])
let size = chars.size;
console.log(size)

chars.add('c')
console.log(chars)

chars.add('d').add('e').add('a')
console.log(chars)

console.log(chars.has('x'))

chars.delete('e')
console.log(chars)

//chars.clear();
console.log(chars)

for (let c of chars) {
    console.log(c)
}


//map
let john = {name: 'John c'}
let peter = {name: 'Peter b'}
let mary = {name: 'Mary f'}
let userRoles = new Map([
    [john, 'smecher'],
    [mary, 'boss']
])
userRoles.set(john, 'admin').set(peter, 'boss').set(mary, 'employee').set(john, 'smecher')
console.log(userRoles)

console.log("******************",userRoles.get(john))

console.log(userRoles.has(john))
console.log(userRoles.size)

for (let user of userRoles) {
    console.log(user)
    console.log(user[0])
    console.log(user[1])
}

for (let user of userRoles.keys()) {
    console.log(user)
    console.log(userRoles.get(user))
}

for (let role of userRoles.values()) {
    console.log(role)
}


let words = ["ana", "are", "mere", "are"]
let wordsCount = new Map()
for (let word of words) {
    if (!wordsCount.has(word)) {
        wordsCount.set(word, 1)
    } else {
        wordsCount.set(word, wordsCount.get(word) + 1)
    }
}
console.log(wordsCount)

//cum aflii daca un array contine duplicate folosindu-te de un set
let a = [1,2,3,4,5,4]
let c = new Set([1,2,3,4,5,4])
console.log(c)
let sizeC = c.size
console.log(sizeC)
let sizeA = a.size
let verify = sizeA === sizeC ? true : false
console.log(verify)





