let scores = new Array()
//let scores = new Array(9,10,8,7)
let colors = ['red', 'green', 'blue']

colors.push('black')
console.log(colors)

colors.pop()
console.log(colors)

console.log(colors.indexOf('green'))

let styles = ['jazz', 'blues']
styles.push("rock")

styles[Math.floor(styles.length/2)] = 'pop'
console.log(styles)

console.log(styles.shift())
console.log(styles)
styles.unshift("a","s")
console.log(styles)


