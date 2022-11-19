let circles = [10, 30, 50]

function computeAreas(circles) {
    let areas = [];
    for (let c of circles) {
        areas.push(c * c * Math.PI);
    }
    return areas;
}

console.log(computeAreas(circles))


//v2
function computeArea(radius) {
    return radius * radius * Math.PI;
}

let areas = circles.map(computeArea)
console.log("**********************************",areas)


//v3
let ares2 = circles.map(function computeArea(radius) {
    return radius * radius * Math.PI;
})
console.log(ares2)

//v4
let areas3 = circles.map(radius => radius * radius * Math.PI)
console.log(areas3)

let numbers = [16, 25, 36]
console.log("Ggggggggggggggggggggggggggg",numbers.map(number => Math.sqrt(number)))

//flat and flatMap
let numbers2 = [1,2,[3,4,5]]
console.log(numbers2.flat())

let sentences = ["asdf sdf sdf", "is", "asdas", "asd fggf sds"]
let words = sentences.flatMap(sentece => sentece.split(" "))
let words2 = sentences.map(sentece => sentece.split(" "))
console.log(words)
console.log(words2)

